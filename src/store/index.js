import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCartState = { items: [], counter: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
        state.items.push(action.payload.product)
    },
  },
});

const cartReducer = cartSlice.reducer;

const store = configureStore({
  reducer: { cart: cartReducer },
});

export default store;
export const cartActions = cartSlice.actions;
