import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import organizationReducer from "./slices/organizationSlice";
import socketReducer from "./slices/socketSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    organization:organizationReducer,
    socket:socketReducer
  },
});
