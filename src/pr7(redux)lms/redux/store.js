import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./taskSlice.js";
import filtersReducer from "./filtersSlice.js";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
