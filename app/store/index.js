import { configureStore } from "@reduxjs/toolkit";
import counterCart from "./features/counterSlice"

export const store = configureStore({
    reducer: {
        cart: counterCart,
    },
});