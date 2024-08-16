import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import authReducer from "./auth/authSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

type Store = ReturnType<typeof makeStore>;

export const wrapper = createWrapper(makeStore);
// export default wrapper;
