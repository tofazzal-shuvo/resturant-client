//Constant
export const ADD_CART = "ADD_CART";
export const CLEAR_ITEM = "CLEAR_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";

// initial state
const initialState = {
  addedItems: [],
};

export const CartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  let addedItems;
  switch (type) {
    case CLEAR_ITEM:
      return { addedItems: [] };

    case ADD_CART:
      state.addedItems.push(payload);
      return { ...state };

    case DELETE_ITEM:
      addedItems = state.addedItems.filter(({ item }) => item !== payload.item);
      console.log(addedItems, payload);
      return { ...state, addedItems };
    case UPDATE_QUANTITY:
      state.addedItems[payload.idx].quantity = payload.quantity;
      // addedItems = state.addedItems.map((item) => {
      //   if (item.item === payload.item) item.quantity = payload.quantity;
      //   return item;
      // });
      // console.log(payload, addedItems);
      return { ...state };
    default: {
      return state;
    }
  }
};

export const clearCard = () => ({
  type: CLEAR_ITEM,
});

export const deleteCardItem = (payload) => ({
  type: DELETE_ITEM,
  payload,
});

export const updateCardItemQnt = (payload) => ({
  type: UPDATE_QUANTITY,
  payload,
});

export const addCart = (payload) => ({
  type: ADD_CART,
  payload,
});
