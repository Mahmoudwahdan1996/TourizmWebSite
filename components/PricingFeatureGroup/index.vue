<template>
  <tbody class="light-primary">
    <template v-for="(feature, i) in features">
      <tr
        :key="'feature-' + i"
        class="pricing__feature-title secondary white--text"
      >
        <td colspan="6">{{ feature.name }}</td>
      </tr>

      <tr
        v-for="(item, j) in feature.featureGroup"
        :key="`feature-group-${i}-${j}`"
      >
        <td colspan="3">
          <p>{{ item.name }}</p>
          <p>
            <small>{{ item.description }}</small>
          </p>
        </td>
        <td>{{ item.values[0] }}</td>
        <td>{{ item.values[1] }}</td>
        <td>{{ item.values[2] }}</td>
      </tr>
    </template>
  </tbody>
</template>

<script>
export default {
  name: "PricingFeatureGroup",

  data() {
    return {
      features: [
        {
          name: "إدارة الموقع",
          featureGroup: [
            {
              name: "عدد الطلبات غير محدودة",
              description: "طلبات غير محدودة بدون عمولة على الطلب",
              values: [2, 4, 6],
            },
            {
              name: "عدد الطلبات غير محدودة",
              description: "طلبات غير محدودة بدون عمولة على الطلب",
              values: ["اساسي", "اساسي", "اساسي"],
            },
            {
              name: "عدد الطلبات غير محدودة",
              description: "طلبات غير محدودة بدون عمولة على الطلب",
              values: [2, 4, 6],
            },
          ],
        },

        {
          name: "إدارة الموقع",
          featureGroup: [
            {
              name: "عدد الطلبات غير محدودة",
              description: "طلبات غير محدودة بدون عمولة على الطلب",
              values: [2, 4, 6],
            },
            {
              name: "عدد الطلبات غير محدودة",
              description: "طلبات غير محدودة بدون عمولة على الطلب",
              values: ["اساسي", "اساسي", "اساسي"],
            },
            {
              name: "عدد الطلبات غير محدودة",
              description: "طلبات غير محدودة بدون عمولة على الطلب",
              values: [2, 4, 6],
            },
          ],
        },
      ],
    };
  },
};
</script>
