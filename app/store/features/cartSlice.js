import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
  },
  reducers: {
    buyProduct: (state, action) => {
      const productId = action.payload;

      if (!state.items[productId]) {
        state.items[productId] = {
          isClicked: true,
          quantity: 1,
        };
      } else {
        state.items[productId].quantity = 1;
        state.items[productId].isClicked = true;
      }
    },
    reduceQuantity: (state, action) => {
      const productId = action.payload;

      if (state.items[productId] && state.items[productId].quantity > 0) {
        state.items[productId].quantity -= 1;
      }

      if (state.items[productId].quantity === 0) {
        state.items[productId].isClicked = false;
      }
    },
    addQuantity: (state, action) => {
      const productId = action.payload;

      if (state.items[productId]) {
        state.items[productId].quantity += 1;
      }
    },
  },
});

export const { buyProduct, reduceQuantity, addQuantity } = cartSlice.actions;
export default cartSlice.reducer;
