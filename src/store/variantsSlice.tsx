import { createSlice } from '@reduxjs/toolkit';
import { Variant } from '../model/Catalog/Furniture';

const initialVariants: { items: Variant[] } = {
  items: [],
};

const variantsSlice = createSlice({
  name: 'variants',
  initialState: initialVariants,
  reducers: {
    updateVariants(state, action) {
      state.items = action.payload.variants;
    },
  },
});

export default variantsSlice;
