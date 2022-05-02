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

const helper = {
  findInArrById: (arr: { id: number }[], id: number) => {
    return arr.findIndex((item) => item.id === id);
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const payloadProduct = action.payload.product;
      const findIndex = helper.findInArrById(state.items, payloadProduct["id"]);
      if (findIndex >= 0) {
        state.items[findIndex]["qty"] =
          state.items[findIndex]["qty"] + action.payload.qty;
        state.counter++;
      } else {
        const item = payloadProduct;
        if (item["qty"] === undefined) {
          item["qty"] = 1;
        }
        const updatedItems = state.items.concat(item);
        return { items: updatedItems, counter: state.counter + 1 };
      }
    },
    removeFromCart(state, action) {
      const findIndex = helper.findInArrById(
        state.items,
        action.payload.itemId
      );
      const itemQty = state.items[findIndex]["qty"];
      state.counter = state.counter - itemQty;
      state.items.splice(findIndex, 1);
    },
    increaseQty(state, action) {
      const payloadProduct = action.payload.product;
      const findIndex = helper.findInArrById(state.items, payloadProduct["id"]);
      state.items[findIndex]["qty"] =
        state.items[findIndex]["qty"] + action.payload.qty;
      state.counter++;
    },
    decreaseQty(state, action) {
      const findIndex = helper.findInArrById(
        state.items,
        action.payload.product["id"]
      );
      if (state.items[findIndex]["qty"] > 1) {
        state.items[findIndex]["qty"]--;
      } else {
        state.items.splice(findIndex, 1);
      }
      state.counter--;
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
