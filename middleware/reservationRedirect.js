export default function ({ redirect, app }) {
  redirect(app.localePath("/profile/reservations/trips"));
}
