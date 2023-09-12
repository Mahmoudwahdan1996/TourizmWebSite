<template>
  <nuxt-link class="auth__left__go-home d-flex align-center" to="/">
    <svg
      width="46"
      height="46"
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <circle id="ztabbaug3a" cx="32" cy="32" r="32" />
      </defs>
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(1 1)">
          <circle
            class="primary--fill"
            stroke="#FFF"
            stroke-width="1.6"
            stroke-linejoin="square"
            fill="#2eac56"
            cx="32"
            cy="32"
            r="31.2"
          />
          <use
            class="primary--stroke"
            stroke="#2eac56"
            stroke-width=".8"
            xlink:href="#ztabbaug3a"
          />
        </g>
        <path
          d="M49.15 29.715s0-.002-.002-.003l-13.911-13.91a3.118 3.118 0 0 0-2.22-.92c-.839 0-1.627.326-2.22.92L16.892 29.704l-.014.015a3.143 3.143 0 0 0 .006 4.433 3.121 3.121 0 0 0 2.18.92h.555v10.238a3.679 3.679 0 0 0 3.674 3.674h5.443a1 1 0 0 0 1-1V39.96c0-.925.751-1.677 1.676-1.677h3.21c.924 0 1.676.752 1.676 1.677v8.026a1 1 0 0 0 1 1h5.442a3.679 3.679 0 0 0 3.675-3.675V35.073h.514a3.12 3.12 0 0 0 2.22-.92 3.144 3.144 0 0 0 .002-4.438zm-1.414 3.025a1.134 1.134 0 0 1-.807.335h-1.513c-.552 0-1 .447-1 1V45.31c0 .924-.752 1.676-1.676 1.676h-4.443V39.96a3.679 3.679 0 0 0-3.675-3.675h-3.21a3.679 3.679 0 0 0-3.675 3.675v7.027h-4.444a1.678 1.678 0 0 1-1.676-1.676V34.074c0-.552-.447-.999-1-.999h-1.486a1.132 1.132 0 0 1-.833-.335 1.143 1.143 0 0 1 0-1.614l.001-.001 13.911-13.91c.213-.216.504-.336.807-.335.305 0 .591.118.807.334l13.908 13.908.006.006a1.144 1.144 0 0 1-.002 1.612z"
          fill="#FFF"
        />
      </g>
    </svg>

    <p class="mb-0 font-weight-bold mx-4">
      {{ $t("back_home") }}
    </p>

    <svg
      class="arrow"
      width="12"
      height="18"
      viewBox="0 0 12 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="secondary--fill"
        d="M.918 9.041a1.29 1.29 0 0 1 .374-.916L9.037.38a1.296 1.296 0 0 1 1.833 1.833L4.03 9.04l6.828 6.829a1.29 1.29 0 0 1-1.82 1.82L1.292 9.945a1.29 1.29 0 0 1-.374-.904z"
        fill="#99CB3B"
        fill-rule="evenodd"
      />
    </svg>
  </nuxt-link>
</template>

<script>
export default {
  name: "GoHome",
};
</script>
