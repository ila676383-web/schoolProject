import { createSlice } from "@reduxjs/toolkit";

const initialState: { password: boolean } = { password: false };

export const formLoginSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    isPassword: (state) => {
      state.password = true;

    },

  },
});

export const formLoginSliceReducer = formLoginSlice.reducer;
export const { isPassword } = formLoginSlice.actions;
