import { configureStore } from "@reduxjs/toolkit";

import tasksReducer from "./tasksSlice.js";
import filtersReducer from "./filtersSlice.js"



//  1. Створюємо store 
export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        filters: filtersReducer,
    }
})

//  2. Наступне в файлі tasksSlice