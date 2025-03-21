import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    totalQuantity: 0,
    orderTotal: 0,
  },
  reducers: {
    buyProduct: (state, action) => {
      const { id, price, imageThumbnail } = action.payload;

      if (state.items[id] === undefined || state.items[id].quantity === 0) {
        state.items[id] = {};
        state.items[id].thumbnail = imageThumbnail;
        state.items[id].isClicked = true;
        state.items[id].quantity = 1;
        state.items[id].price = price;
        state.items[id].totalPrice = price;
        state.orderTotal += price;
        state.totalQuantity += 1;
      }
    },
    reduceQuantity: (state, action) => {
      const id = action.payload;

      if (state.items[id].quantity > 0) {
        state.items[id].quantity -= 1;
        state.items[id].totalPrice =
          state.items[id].price * state.items[id].quantity;
        state.orderTotal -= state.items[id].price;
        state.totalQuantity -= 1;
      }

      if (state.items[id].quantity === 0) {
        state.items[id].isClicked = false;
      }
    },
    addQuantity: (state, action) => {
      const id = action.payload;

      state.items[id].quantity += 1;
      state.items[id].totalPrice =
        state.items[id].price * state.items[id].quantity;
      state.orderTotal += state.items[id].price;
      state.totalQuantity += 1;
    },
    startNewOrder: (state, action) => {
      const keys = Object.keys(state.items);

      if (keys.length > 0) {
        keys.forEach((key) => {
          state.items[key].quantity = 0;
          state.items[key].isClicked = false;
        });

        state.totalQuantity = 0;
        state.orderTotal = 0;
      }
    },
    removeProduct: (state, action) => {
      const { productId } = action.payload;

      state.totalQuantity -= state.items[productId].quantity;
      state.orderTotal -= state.items[productId].totalPrice;
      state.items[productId].quantity = 0;
      state.items[productId].isClicked = false;
    },
  },
});

export const {
  buyProduct,
  reduceQuantity,
  addQuantity,
  startNewOrder,
  removeProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
