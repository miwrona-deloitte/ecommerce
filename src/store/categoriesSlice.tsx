import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useApolloClient } from '@apollo/client';
import { GET_CATEGORIES } from '../graphql/query/category';
import { Category } from '../model/Catalog/Category';
import { MenuItemType } from '../components/Layout/Navbar';

type categorieSliceType = {
  items: { all: any[]; mains: MenuItemType[] };
};

const initialState: categorieSliceType = {
  items: { all: [], mains: [] },
};

export const getCategories = createAsyncThunk('getCategories', async (name, thunkAPI) => {
  try {
    const client = useApolloClient();
    const result = await client.query({
      query: GET_CATEGORIES,
    });
    return result.data.categoryCollection.items;
  } catch (error: any) {
    const msg = error.message ? error.message : 'cateegories request failed';
    return thunkAPI.rejectWithValue(msg);
  }
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCategories.pending, state => {});
    builder.addCase(getCategories.rejected, state => {});
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.items.all = action.payload;
      const payload = action.payload;
      const mains = payload.filter((category: Category) => {
        return !category.hasParent;
      });
      const parsedCategories: MenuItemType[] = [];

      mains.filter((category: Category) =>
        parsedCategories.push({ id: category.id, title: category.name, url: category.link ?? '/', cms: true }),
      );
      state.items.mains = parsedCategories;
    });
  },
});

export default categoriesSlice;
