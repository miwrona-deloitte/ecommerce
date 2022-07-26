import { configureStore } from '@reduxjs/toolkit';
import { Variant } from '../model/Catalog/Furniture';
import { Product } from '../model/Catalog/Product';
import { Item } from './../model/Cart/Item';
import variantsSlice from './variantsSlice';
import cartSlice from './cartSlice';
import minicartSlice from './minicartSlice';
import categoriesSlice from './categoriesSlice';
import { Category } from '../model/Catalog/Category';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    variants: variantsSlice.reducer,
    minicart: minicartSlice.reducer,
    categories: categoriesSlice.reducer,
  },
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
  minicart: { visible: boolean };
  categories: {
    items: Category[];
  };
}
export const cartActions = cartSlice.actions;
export const variantsActions = variantsSlice.actions;
export const minicartActions = minicartSlice.actions;
export type { Product, Item };
