export const USER_COOKIE = "restaurent_cookie";

export function getAuthData() {
  const state = localStorage.getItem(USER_COOKIE);

  if (typeof state === "string") return JSON.parse(state);
  else return {};
}

export function setAuthData(state) {
  const strState = JSON.stringify(state);
  localStorage.setItem(USER_COOKIE, strState);
}
