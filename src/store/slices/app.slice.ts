import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  sample: any
}

const initialState: InitialState = {
  sample: {}
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    test: (state, { payload }: PayloadAction<InitialState>) => {
      state.sample = payload.sample;
    },
  },
});

export const { actions } = appSlice;
export const { test } = appSlice.actions;

export default appSlice.reducer;