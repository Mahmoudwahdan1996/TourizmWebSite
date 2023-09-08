<template>
  <div class="service-map">
    <v-btn-toggle
      v-model="form.flag"
      class="button-group"
      active-class="active-button"
      group
      mandatory
      borderless
    >
      <v-btn height="43" value="all">
        {{ $t('button.all') }}
      </v-btn>
      <v-btn height="43" value="activity">
        {{ $t('button.activity') }}
      </v-btn>
      <v-btn height="43" value="route">
        {{ $t('button.route') }}
      </v-btn>
    </v-btn-toggle>
    <GmapMap
      ref="gMap"
      :options="mapOptions"
      :language="$i18n.locale"
      :center="{
        lat: services[0] && parseFloat(services[0].lat),
        lng: services[0] && parseFloat(services[0].lng),
      }"
      :zoom="7"
      map-type-id="terrain"
      style="height: 600px"
    >
      <GmapMarker
        v-for="(service, index) in services"
        :key="index"
        :position="{
          lat: parseFloat(service.lat),
          lng: parseFloat(service.lng),
        }"
        :clickable="true"
        :label="{
          text: service.title,
          color: '#383838',
          fontSize: '12px',
          fontWeight: 'bold',
          className: 'marker-label',
        }"
        :options="markerOptions"
        @click="handleMarker(service)"
      />
    </GmapMap>
  </div>
</template>

<script>
import location from '@/assets/images/location.svg'
export default {
  name: 'ServiceMap',
  props: {
    readOnly: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: Boolean,
      default: true
    },
    markerLabel: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      loadingMap: false,
      services: [{ lng: '', lat: '' }],
      circleOptions: {},
      form: {
        flag: 'all',
        lat: 32.3232323,
        lng: 32.1616163
      },

      pins: {
        selected: 'data:image/png;base64,iVBORw0KGgo...',
        notSelected: 'data:image/png;base64,iVBORw0KGgo...'
      },
      mapStyle: ['terrain']
    }
  },

  fetch () {
    // this.getCurrentLocation()
    this.handleGetServiceMap()
  },
  computed: {
    markerOptions () {
      return {
        icon: {
          url: location,
          labelOrigin: { x: 20, y: 65 },
          labelInBackground: true
        },
        draggable: false
      }
    },
    mapOptions () {
      return {
        zoomControl: false,
        fullscreenControl: false,
        draggable: this.draggable,
        mapTypeId: 'roadmap'
        // styles: this.mapStyle,
      }
    }
  },
  watch: {
    'form.flag': {
      handler () {
        this.$fetch()
      },
      immediate: true
    }
  },

  methods: {
    async handleGetServiceMap () {
      const res = await this.$http.post({
        resource: 'service_map',
        data: { ...this.form }
      })
      const { data } = res.data
      this.services = data
    },
    getCurrentLocation () {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        this.form.lat = coords.latitude
        this.form.lng = coords.longitude
      })

      // setTimeout(() => {
      // }, 1000)
    },

    setLocation (loc) {
      this.$refs.gMap.map.setCenter({
        lat: parseFloat(loc.lat),
        lng: parseFloat(loc.lng)
      })
    },
    handleMarker (service) {
      this.$router.push(this.localePath(`/services/${service.id}`))
    }
  }
}
</script>

<style lang="scss">
.GMap__Wrapper {
  border-radius: 15px;
}
.marker-label {
  background-color: #029f02 !important;
  display: inline-block;
  padding: 5px;
  border-radius: 8px;
}
.service-map {
  margin-top: 20px;
  .v-btn-toggle--group > .v-btn.v-btn {
    border-radius: 7px !important;
    background: #ffffff 0% 0% no-repeat padding-box !important;
    box-shadow: 0px 3px 6px #00000029 !important;
    color: #d5d0d0 !important;
    font-weight: bold !important;
    min-width: 100px !important;
  }
  .active-button {
    &.v-btn.v-btn {
      background: #383838 !important;
      border-radius: 7px !important;
      color: #fff !important;
      font-weight: bold !important;
    }
  }
  position: relative;
  .button-group {
    position: absolute;
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    z-index: 57 !important;
  }
}
</style>
