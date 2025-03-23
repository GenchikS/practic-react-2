import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/tasks");
      // console.log("response.data", response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


// 3.  Створюємо ф-цію додавання завдань POST запит
export const addTask = createAsyncThunk(
  "tasks/addTask", 
  async (text, thunkAPI) => {
    try {
      const response = await axios.post("/tasks", { text });
      return response.data;
    }
    catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
    }
)
// 2.  Попереднє в файлі App7lms
// 4.  Наступне в файлі TaskForm

// 6.  Створюємо ф-цію видалення deleteTask
export const deleteTask = createAsyncThunk(
  "tasks/delete", 
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${ taskId }`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

// 5.  Попереднє в файлі taskSlice
// 7.  Наступне в файлі Task

// 9.  Створюємо ф-цію фільтрації
export const toggleCompleted = createAsyncThunk("tasks/toggleCompleted", async (task, thunkAPI) => {
  try {
    const response = await axios.put(`/tasks/${task.id}`, {
      completed: !task.completed,
    });
    // console.log(task) і response.data одинакове
    // console.log(response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

// 8.  Попереднє в файлі taskSlice
// 10.  Наступне в файлі Task