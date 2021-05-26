import { ADD_CARD } from "./cart";

//Constant
const ADD_INFO = "ADD_INFO";
const CLEAR_NOTE = "CLEAR_NOTE";

// initial state
const initialState = {
  tableId: "",
  restaurantId: "",
  lang: "",
  note: "",
  isMenuItem: false,
  category: [],
  menuItems: [],
  resTemplate: {},
  resInfo: {},
};

export const InfoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(payload)
  switch (type) {
    case ADD_INFO:
      return { ...state, ...payload };

    case CLEAR_NOTE:
      return { ...state, note: "" };

    default: {
      return state;
    }
  }
};

export const addInfo = (payload) => ({
  type: ADD_INFO,
  payload,
});

export const clearNote = () => ({
  type: CLEAR_NOTE,
});
