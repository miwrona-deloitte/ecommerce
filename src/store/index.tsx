import { configureStore, createSlice } from "@reduxjs/toolkit";

interface Product {
  id: number;
  name: string;
  price: string;
  url: string;
}

interface Item extends Product {
  qty: number;
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
      let payloadProduct = action.payload.product;
      const id = payloadProduct["id"];
      const findIndex = state.items.findIndex(
        (stateProduct) => stateProduct.id === id
      );
      if (findIndex >= 0) {
        if (isNaN(state.items[findIndex]["qty"])) {
          state.items[findIndex]["qty"] = 1;
        }
        state.items[findIndex]["qty"] =
          state.items[findIndex]["qty"] + action.payload.qty;
      } else {
        const item = payloadProduct;
        item["qty"] = 1;
        const updatedItems = state.items.concat(item);
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
export type { Product, Item };
