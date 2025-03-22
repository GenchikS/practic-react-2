import { createSlice } from "@reduxjs/toolkit";
import { addTask, deleteTask, fetchTasks, toggleCompleted } from "./operations";


//  12.
const handlePending = state => {
  state.isLoading = true;
}

// 12.
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
}

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      //   в екшинах ми оновлюємо стан redux
      // .addCase(fetchTasks.pending, (state) => {
      //   state.isLoading = true;
      // })
      // 12.
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      // .addCase(fetchTasks.rejected, (state, action) => {
      // state.isLoading = false;
      // state.error = action.payload;
      // })
      //  12.
      .addCase(fetchTasks.rejected, handleRejected)
      // 5.  Дописуємо обробку екшенів доданих завдань addTask
      // .addCase(fetchTasks.pending, (state) => {
      //   state.isLoading = true;
      // })
      // 12.
      .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        //  добавляємо до існуючого масиву завдання
        state.items.push(action.payload);
      })
      // .addCase(fetchTasks.rejected, (state, action) => {
      // state.isLoading = false;
      // state.error = action.payload;
      // })
      //  12.
      .addCase(addTask.rejected, handleRejected)
      // 8.  Дописуємо обробку екшенів доданих завдань deleteTask
      // .addCase(fetchTasks.pending, (state) => {
      //   state.isLoading = true;
      // })
      // 12.
      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        //   перевірка action.payload.id
        // console.log(action.payload.id);
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      // .addCase(fetchTasks.rejected, (state, action) => {
      // state.isLoading = false;
      // state.error = action.payload;
      // })
      //  12.
      .addCase(deleteTask.rejected, handleRejected)
      // 11.  Дописуємо обробку екшенів доданих завдань deleteTask
      // .addCase(fetchTasks.pending, (state) => {
      //   state.isLoading = true;
      // })
      // 12.
      .addCase(toggleCompleted.pending, handlePending)
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        //   перевірка action.payload.id
        // console.log(action.payload.id);
        //  робимо map масиву, якщо id збігаеться з action.payload.id - то в масив додається оновлене завдання. Якщо не збігається - то залишається старе
        state.items = state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      // .addCase(fetchTasks.rejected, (state, action) => {
      // state.isLoading = false;
      // state.error = action.payload;
      // })
      //  12.
      .addCase(toggleCompleted.rejected, handleRejected);
  },
});

export default tasksSlice.reducer;

//  4.  Попереднє в файлі TaskForm
//  6.  Наступне в файлі operatoins

//  8.  Попереднє в файлі Task
//  9. Наступне в файлі operatoins

//  10.  Попереднє в файлі Task
//  12. Наступне в файлі taskSlice (скорочення коду редюсерів)
//  обробник pending та rejected - одинакові для всіх редюсерів. Можемо прибрати дублювання коду винесенням їх в ф-цію


