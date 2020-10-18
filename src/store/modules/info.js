//Constant
const ADD_INFO = "ADD_INFO";

// initial state
const initialState = {
  tableId: "",
  restaurantId: "",
  lang: "",
};

export const InfoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_INFO:
      return { ...state, ...payload };

    default: {
      return state;
    }
  }
};

export const addInfo = (payload) => ({
  type: ADD_INFO,
  payload,
});
