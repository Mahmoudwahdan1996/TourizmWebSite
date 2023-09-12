<template>
  <form-group :name="name" :attribute="name">
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="true"
      :return-value.sync="date"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-label :for="name">
          <strong class="font-weight-dark"> {{ $t(name) }}</strong>
        </v-label>
        <v-text-field
          class="input-date"
          v-model="form[name]"
          readonly
          v-bind="attrs"
          v-on="on"
        >
          <template #prepend-inner>
            <svg
              width="26"
              height="24"
              viewBox="0 0 26 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="primary--fill"
                d="M20.948 1.848H20V.942c0-.517-.444-.937-.992-.937-.547 0-.99.42-.99.937v.906H8.292V.942c0-.517-.444-.937-.991-.937-.548 0-.992.42-.992.937v.906h-.946C2.66 1.848.462 3.927.462 6.482V19.36c0 2.555 2.199 4.634 4.902 4.634h15.584c2.702 0 4.9-2.079 4.9-4.634V6.481c0-2.554-2.198-4.633-4.9-4.633zM5.364 3.722h.946V5.55c0 .517.444.937.992.937.547 0 .99-.42.99-.937V3.722h9.726V5.55c0 .517.444.937.991.937.548 0 .992-.42.992-.937V3.722h.947c1.609 0 2.918 1.238 2.918 2.76v.895H2.445v-.895c0-1.522 1.31-2.76 2.919-2.76zM20.948 22.12H5.364c-1.61 0-2.92-1.237-2.92-2.759V9.251h21.422v10.11c0 1.522-1.309 2.76-2.918 2.76zm-11.68-9.183c0 .518-.444.937-.992.937H6.327c-.547 0-.991-.42-.991-.937 0-.517.444-.937.991-.937h1.95c.547 0 .99.42.99.937zm11.707 0c0 .518-.443.937-.99.937h-1.95c-.548 0-.991-.42-.991-.937 0-.517.443-.937.99-.937h1.95c.548 0 .991.42.991.937zm-5.86 0c0 .518-.443.937-.99.937h-1.95c-.547 0-.991-.42-.991-.937 0-.517.444-.937.991-.937h1.95c.547 0 .99.42.99.937zm-5.847 5.529c0 .517-.444.937-.992.937H6.327c-.547 0-.991-.42-.991-.937 0-.518.444-.937.991-.937h1.95c.547 0 .99.42.99.937zm11.707 0c0 .517-.443.937-.99.937h-1.95c-.548 0-.991-.42-.991-.937 0-.518.443-.937.99-.937h1.95c.548 0 .991.42.991.937zm-5.86 0c0 .517-.443.937-.99.937h-1.95c-.547 0-.991-.42-.991-.937 0-.518.444-.937.991-.937h1.95c.547 0 .99.42.99.937z"
                fill="#0F6FFD"
                fill-rule="evenodd"
              />
            </svg>
          </template>
        </v-text-field>
      </template>
      <v-date-picker v-model="form[name]" no-title scrollable>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
        <v-btn text color="primary" @click="$refs.menu.save(date)"> OK </v-btn>
      </v-date-picker>
    </v-menu>
  </form-group>
</template>


<script>
export default {
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
  }),
  props: {
    form: {
      type: Object,
      default: () => {},
    },
    name: {
      type: String,
      default: () => "",
    },
  },
};
</script>