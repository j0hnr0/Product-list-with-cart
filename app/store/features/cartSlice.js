import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    totalQuantity: 0,
  },
  reducers: {
    buyProduct: (state, action) => {
      const { id, price } = action.payload;

      if (state.items[id] === undefined || state.items[id].quantity === 0) {
        state.items[id] = {};
        state.items[id].isClicked = true;
        state.items[id].quantity = 1;
        state.items[id].price = price;
        state.items[id].totalPrice = price;
        state.totalQuantity += 1;
      }
    },
    reduceQuantity: (state, action) => {
      const id = action.payload;

      if (state.items[id].quantity > 0) {
        state.items[id].quantity -= 1;
        state.totalQuantity -= 1;
      }

      if (state.items[id].quantity === 0) {
        state.items[id].isClicked = false;
      }
    },
    addQuantity: (state, action) => {
      const id = action.payload;

      state.items[id].quantity += 1;
      state.items[id].totalPrice = state.items[id].price * state.items[id].quantity;
      state.totalQuantity += 1;
    },
  },
});

export const { buyProduct, reduceQuantity, addQuantity } = cartSlice.actions;
export default cartSlice.reducer;
