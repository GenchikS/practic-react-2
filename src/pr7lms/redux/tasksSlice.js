import { createSlice } from "@reduxjs/toolkit";


// 2.  Створюємо файл slice (tasksSlice)
const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    reducers: {
        // 3.  Створюємо ф-ції та індекатор завантажень
        fetchInProgress(state) { state.isLoading = true},
        fetchSuccess(state, action) {state.isLoading = false, state.error = null, state.items = action.payload },
        fetchError(state, action){state.isLoading = false, state.error = action.payload}
    }
})

export const { fetchInProgress, fetchSuccess, fetchError } = tasksSlice.actions;
export default tasksSlice.reducer;

// 1.  Попередне в файлі store.js
// 4.  Наступне в файлі operations.js