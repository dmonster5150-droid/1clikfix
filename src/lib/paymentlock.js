export function isPaidUser() {
  const url = new URL(window.location.href)
  if (url.searchParams.get("paid") === "true") {
    localStorage.setItem("provider_paid", "true")
    return true
  }
  return localStorage.getItem("provider_paid") === "true"
}
