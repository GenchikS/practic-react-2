import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./operations.js";


// 2.  Створюємо файл slice (tasksSlice)
// const tasksSlice = createSlice({
//     name: "tasks",
//     initialState: {
//         items: [],
//         isLoading: false,
//         error: null
//     },
//     reducers: {
//         // 3.  Створюємо ф-ції та індекатор завантажень
//         fetchInProgress(state) { state.isLoading = true},
//         fetchSuccess(state, action) {state.isLoading = false, state.error = null, state.items = action.payload },
//         fetchError(state, action){state.isLoading = false, state.error = action.payload}
//     }
// })

// export const { fetchInProgress, fetchSuccess, fetchError } = tasksSlice.actions;
// export default tasksSlice.reducer;

//  1.  Попередне в файлі store.js
//  4.  Наступне в файлі operations.js

//  12. Перероблюємо файл tasksSlice та добавляємо builder
const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
//  13.  Додаємо обробку зовнішніх екшенів
    extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.error = null),
          (state.items = action.payload);
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.payload);
      });
    }
    
})

export default tasksSlice.reducer;

//  14.  Наступне в файлі operations.js