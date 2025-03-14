import { configureStore } from "@reduxjs/toolkit";

import tasksReducer from "./tasksSlice.js"

//  1. Створюємо store 
export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    }
})

//  2. Наступне в файлі tasksSlice