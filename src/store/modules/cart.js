//Constant
export const ADD_CARD = "ADD_CARD";
export const CLEAR_ITEM = "CLEAR_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

// initial state
const initialState = {};

export const CardReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CLEAR_ITEM:
      return {};

    case ADD_CARD:
      const { id, ...rest } = payload;
      state[id] = { item: id, ...rest, _id: id };
      return {...state};

    case DELETE_ITEM:
      let data = state;
      delete data[payload.id];
      return { ...data };
    default: {
      return state;
    }
  }
};

export const clearCard = () => ({
  type: CLEAR_ITEM,
});

export const deleteCard = (payload) => ({
  type: DELETE_ITEM,
  payload,
});

export const addCard = (payload) => ({
  type: ADD_CARD,
  payload,
});
