import { createSlice } from '@reduxjs/toolkit';

const initialState: { visible: Boolean } = {
  visible: false,
};

const minicartSlice = createSlice({
  name: 'minicart',
  initialState,
  reducers: {
    showMinicart(state, action) {
      state.visible = action.payload.visible;
    },
  },
});

export default minicartSlice;
