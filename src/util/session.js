export const USER_COOKIE = "restaurent_cookie";

export function getAuthData() {
  const cards = localStorage.getItem(USER_COOKIE);
  console.log({ cardsdata: cards });
  if (typeof cards === "string") return JSON.parse(cards);
  else return {};
}

export function setAuthData(card) {
  const strState = JSON.stringify(card);
  localStorage.setItem(USER_COOKIE, strState);
}
