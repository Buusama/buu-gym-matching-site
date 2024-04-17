import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth";
import authForm from "./slices/authForm";
import service from "./slices/service";
import trainer from "./slices/trainer";
import schedule from "./slices/schedule";
const store = configureStore({
  reducer: {
    auth,
    authForm,
    service,
    schedule,
    trainer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
