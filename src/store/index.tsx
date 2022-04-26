import { configureStore, createSlice } from "@reduxjs/toolkit";
interface Item {
  id: number;
  name: string;
  price: string;
  url: string;
}
const initialCartState: { items: Item[]; counter: number } = {
  items: [],
  counter: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const payloadProduct = action.payload.product;
      const id = payloadProduct["id"];
      if (state.items.find((stateProduct) => stateProduct.id === id)) {
        //increment qty
      } else {
        const updatedItems = state.items.concat(payloadProduct);
        return { items: updatedItems, counter: 0 };
      }
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
