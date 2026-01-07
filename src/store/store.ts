import { configureStore } from "@reduxjs/toolkit";

import { loadState, saveState } from "@/helpers";

import tasksReducer from "./slice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState({
    tasks: store.getState().tasks,
  });
});
