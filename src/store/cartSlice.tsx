import { createSlice } from '@reduxjs/toolkit';
import { Item } from './../model/Cart/Item';

const initialCartState: { items: Item[]; counter: number; total: any } = {
  items: [],
  counter: 0,
  total: 0,
};

const helper = {
  findInArrById: (arr: { id: number }[], id: number) => {
    return arr.findIndex(item => item.id === id);
  },
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const payloadProduct = action.payload.product;
      const findIndex = helper.findInArrById(state.items, payloadProduct['id']);
      if (findIndex >= 0) {
        state.items[findIndex]['qty'] = state.items[findIndex]['qty'] + action.payload.qty;
        state.counter++;
        const updatedTotal =
          state.total + Number(state.items[findIndex].price.replaceAll(/\s/g, '')) * action.payload.qty;
        state.total = updatedTotal;
      } else {
        const item = payloadProduct;
        if (item['qty'] === undefined) {
          item['qty'] = 1;
        }
        const updatedItems = state.items.concat(item);
        return {
          items: updatedItems,
          counter: state.counter + 1,
          total: state.total + Number(payloadProduct.price.replaceAll(/\s/g, '')),
        };
      }
    },
    removeFromCart(state, action) {
      const findIndex = helper.findInArrById(state.items, action.payload.itemId);
      const itemQty = state.items[findIndex]['qty'];
      state.counter = state.counter - itemQty;
      state.total = state.total - Number(state.items[findIndex].price.replaceAll(/\s/g, '')) * itemQty;
      state.items.splice(findIndex, 1);
    },
    increaseQty(state, action) {
      const payloadProduct = action.payload.product;
      const findIndex = helper.findInArrById(state.items, payloadProduct['id']);
      state.items[findIndex]['qty'] = state.items[findIndex]['qty'] + action.payload.qty;
      state.counter++;
      const updatedTotal =
        state.total + Number(state.items[findIndex].price.replaceAll(/\s/g, '')) * action.payload.qty;
      state.total = updatedTotal;
    },
    decreaseQty(state, action) {
      const findIndex = helper.findInArrById(state.items, action.payload.product['id']);
      if (state.items[findIndex]['qty'] > 1) {
        state.items[findIndex]['qty']--;
      } else {
        state.items.splice(findIndex, 1);
      }
      state.counter--;
      const updatedTotal =
        state.total - Number(state.items[findIndex].price.replaceAll(/\s/g, '')) * action.payload.qty;
      state.total = updatedTotal;
    },
  },
});

export default cartSlice;
