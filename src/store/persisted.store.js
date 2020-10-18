import { getAuthData, setAuthData } from "../util/session";

export const saveState = (state) => {
  try {
    // Parsing auth data from Redux store
    setAuthData(state);
  } catch (err) {
    // Ignore write error
  }
};

/* Use an IIFE to export the persisted state in a variable */
export const persistedState = (() => {
  try {
    const state = getAuthData();
    return state || undefined;
  } catch (err) {
    return undefined;
  }
})();
