<template>
  <div>
    <v-label for="phone">
      <b class="gray--text">{{ $t('fields.currencies') }}</b>
    </v-label>
    <v-select v-model="form.currency_id" v-bind="$attrs" :loading="loading" rounded filled :items="currencies"
      item-text="title" item-value="id" v-on="$listeners" />
  </div>
</template>

<script>
export default {
  name: 'CurrencyComponent',
  inheritAttrs: false,
  props: {
    form: {
      type: Object,
      default: () => { }
    }
  },
  data() {
    return {
      currencies: [],
      loading: true
    }
  },
  mounted() {
    this.getCurrencies()
  },
  methods: {
    getCurrencies() {
      this.$http
        .get({ resource: 'currencies' })
        .then((res) => {
          const { data } = res.data

          this.currencies = data
        })
        .finally(() => (this.loading = false))
    }
  }
}
</script>
