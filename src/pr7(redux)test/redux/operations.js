import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

//  4. Створюємо шлях запросу по дефолту
axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchTasks = createAsyncThunk("items/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/");
    // console.log(response.data);
    return response.data;
  } catch (err) {
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


export const engineSelect = createAsyncThunk(
  "filters/fetchEngine",
  async (engine, thunkAPI) => {
    // console.log("transmission", transmission);
    try {
      const response = await axios.get("/");
      const dataCity = response.data.items;
      return dataCity.length > 0 && engine;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
