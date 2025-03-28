import axios from "axios";
// import { fetchError, fetchInProgress, fetchSuccess } from "./tasksSlice.js";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { selectCity } from "./filtersSlice.js";
import { useSelector } from "react-redux";
// import { selectCity } from "./filtersSlice.js";

//  4. Створюємо шлях запросу по дефолту
axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

//  5.  Створюємо fetch ф-цію для запиту api
// export const fetchTasks = () => async dispatch => {
//     try {
//       // 7.  Добавляємо перед запитом індикатор завантаження з redux state (fetchInProgress = true)
//       dispatch(fetchInProgress());
//         const response = await axios.get("/");
//         dispatch(fetchSuccess(response.data));
//       // console.log(response.data);
//     } catch (err) {
//       // 8.  Добавляємо в redux state помилку, якщо є
//       dispatch(fetchError(err.message));
//     }
// }


//  3.  Попереднє в файлі tasksSlice
//  6.  Наступне в файлі App7lms
//  6.  Попереднє в файлі App7lms
//  9.  Наступне в файлі App7lms

//  11.  Створення createAsyncThunk(). Доповнюємо файл fetchTasks
//  14. Добавляємо thunkAPI в async (_, thunkAPI) для передачі в обробку помилки
export const fetchTasks = createAsyncThunk("items/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/");
    // console.log(response.data);
    // 15.  При успішній опереції повертається проміс
    return response.data;
  } catch (err) {
    //  16.  При помилці повертається проміс, який буде відхилений з текстом помилки
    return thunkAPI.rejectWithValue(err.message)
  }
});



export const citySelect = createAsyncThunk("filters/fetchCity", async (city, thunkAPI) => {
  // console.log("city", city);
   try {
    const response = await axios.get("/");
     const dataCity = response.data.items;
     return dataCity.length>0 && city;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})


export const transmissionSelect = createAsyncThunk(
  "filters/fetchTransmission",
  async (transmission, thunkAPI) => {
    // console.log("transmission", transmission);
    try {
      const response = await axios.get("/");
      const dataCity = response.data.items;
      return dataCity.length > 0 && transmission;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
