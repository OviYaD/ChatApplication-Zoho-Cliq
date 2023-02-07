import { createSlice } from "@reduxjs/toolkit";

export const socketSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setSocket: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    removeSocket: (state) => {
      return {};
    },
  },
});

const { reducer, actions } = socketSlice;
export const { setSocket, removeSocket } = actions;
export default reducer;
