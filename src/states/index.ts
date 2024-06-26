import {
  TypedUseSelectorHook,
  useDispatch as defaultUseDispatchHook,
  useSelector as defaultUseSelectorHook,
} from "react-redux";
import type { AppDispatch, RootState } from "./store";

import store from "./store";

export const useAppDispatch = () => defaultUseDispatchHook<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = defaultUseSelectorHook;

export { store };
export type { AppDispatch, RootState };
