export default ({ app }, inject) => {
  const createTableHeaders = (headersName = []) => {
    return headersName.map((header) => {
      return {
        text: header ? app.i18n.t(`table.${header}`) : "",
        align: "center",
        sortable: false,
        class: "table__header",

        width:
          header === "edit" ||
          header === "delete" ||
          header === "details" ||
          header === "report"
            ? "1"
            : ""
      };
    });
  };
  inject("createTableHeaders", createTableHeaders);
};
