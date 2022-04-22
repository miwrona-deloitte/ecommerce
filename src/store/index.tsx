import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialCartState = { items: [], counter: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      return { items: state.items.concat(action.payload.product), counter: 0 };
    },
  },
});

const cartReducer = cartSlice.reducer;

const store = configureStore({
  reducer: { cart: cartReducer },
});

export default store;
interface Item {
  id: number;
  name: string;
  price: string;
  url: string;
}

export interface RootState {
  cart: {
    items: Item[];
    counter: number;
  };
}
export const cartActions = cartSlice.actions;
