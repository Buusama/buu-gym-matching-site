import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth";
import authForm from "./slices/authForm";
const store = configureStore({
  reducer: {
    auth,
    authForm
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
