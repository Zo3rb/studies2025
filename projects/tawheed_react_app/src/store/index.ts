import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    app: (state = {}, action) => state,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
  devTools: import.meta.env.DEV && {
    name: "Tawheed Store",
    trace: true,
    traceLimit: 25,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
