import { configureStore } from '@reduxjs/toolkit';
import { Variant } from '../model/Catalog/Furniture';
import { Product } from '../model/Catalog/Product';
import { Item } from './../model/Cart/Item';
import variantsSlice from './variantsSlice';
import cartSlice from './cartSlice';

const store = configureStore({
  reducer: { cart: cartSlice.reducer, variants: variantsSlice.reducer },
});

export default store;
export interface RootState {
  cart: {
    items: Item[];
    counter: number;
    total: number;
  };
  variants: {
    items: Variant[];
  };
}
export const cartActions = cartSlice.actions;
export const variantsActions = variantsSlice.actions;
export type { Product, Item };
