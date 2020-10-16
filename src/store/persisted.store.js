import { getAuthData, setAuthData } from "../util/session";

export const saveState = (state) => {
  try {
    // Parsing auth data from Redux store
    setAuthData(state.card);
  } catch (err) {
    // Ignore write error
  }
};

/* Use an IIFE to export the persisted state in a variable */
export const persistedState = (() => {
  try {
    const card = getAuthData();
    return {
      card,
    };
  } catch (err) {
    return undefined;
  }
})();
