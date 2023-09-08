<template>
  <thead class="light-secondary">
    <tr>
      <th colspan="3">
        <h3 class="secondary--text">{{ $t("otas_packages") }}</h3>
      </th>
      <th class="light-primary">
        <p>الجولد</p>

        <div class="pricing__head-prices">
          <p>
            <small>
              <span class="primary--text">$1000</span>
              / سنويا
            </small>
          </p>
          <p>
            <small>
              <span class="secondary--text">$90</span>
              شهريا
            </small>
          </p>
        </div>
      </th>

      <th>
        <p>الفضية</p>

        <div class="pricing__head-prices">
          <p>
            <small>
              <span class="secondary--text">$900</span>
              / سنويا
            </small>
          </p>
          <p>
            <small>
              <span class="primary--text">$70</span>
              شهريا
            </small>
          </p>
        </div>
      </th>

      <th class="light-primary">
        <p>البرونزية</p>

        <div class="pricing__head-prices">
          <p>
            <small>
              <span class="primary--text">$500</span>
              / سنويا
            </small>
          </p>
          <p>
            <small>
              <span class="secondary--text">$60</span>
              شهريا
            </small>
          </p>
        </div>
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: "PricingFeatureGroupHead",
};
</script>
