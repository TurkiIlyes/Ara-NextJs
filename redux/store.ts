import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import projectReducer from "./Project/projectSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      project: projectReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

type Store = ReturnType<typeof makeStore>;

export const wrapper = createWrapper(makeStore);
// export default wrapper;
