import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    totalQuantity: 0,
  },
  reducers: {
    buyProduct: (state, action) => {
      const productId = action.payload;

      if (
        state.items[productId] === undefined ||
        state.items[productId].quantity === 0
      ) {
        state.items[productId] = {};
        state.items[productId].isClicked = true;
        state.items[productId].quantity = 1;
        state.totalQuantity += 1;
      }
    },
    reduceQuantity: (state, action) => {
      const productId = action.payload;

      if (state.items[productId].quantity > 0) {
        state.items[productId].quantity -= 1;
        state.totalQuantity -= 1;
      }

      if (state.items[productId].quantity === 0) {
        state.items[productId].isClicked = false;
      }
    },
    addQuantity: (state, action) => {
      const productId = action.payload;

      state.items[productId].quantity += 1;
      state.totalQuantity += 1;
    },
  },
});

export const { buyProduct, reduceQuantity, addQuantity } = cartSlice.actions;
export default cartSlice.reducer;
