import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "cart",
  initialState: {
    isClicked: false,
    quantity: 0,
  },
  reducers: {
    buyProduct: (state) => {
      state.isClicked = true;

      if (state.quantity === 0) {
        state.quantity += 1;
      }
    },
    reduceQuantity: (state) => {
      if (state.quantity === 1) {
        state.isClicked = false;
      }

      if (state.quantity >= 1) {
        state.quantity -= 1;
      }
    },
    addQuantity: (state) => {
      state.quantity += 1;
    },
  },
});

export const { buyProduct, reduceQuantity, addQuantity } = counterSlice.actions;
export default counterSlice.reducer;
