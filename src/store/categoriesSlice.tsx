import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useApolloClient } from '@apollo/client';
import { GET_CATEGORIES } from '../graphql/query/category';

const initialState = {
  items: [],
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
      state.items = action.payload;
    });
  },
});

export default categoriesSlice;
