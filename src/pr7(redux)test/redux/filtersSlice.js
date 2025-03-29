import { createSlice } from "@reduxjs/toolkit";
import { citySelect, engineSelect, transmissionSelect } from "./operations.js";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    city: "all",
    transmission: "all",
    engine: "all",
  },
  extraReducers: (builder) => {
    builder
      //  необхідно робити для того, щоб action.payload загнати в state та далі використовувати
      .addCase(citySelect.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(citySelect.fulfilled, (state, action) => {
        // console.log("action", action.payload);
        (state.isLoading = true),
          (state.error = null),
          (state.city = action.payload);
      })
      .addCase(citySelect.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(transmissionSelect.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(transmissionSelect.fulfilled, (state, action) => {
        // console.log("action", action.payload);
        (state.isLoading = true),
          (state.error = null),
          (state.transmission = action.payload);
      })
      .addCase(transmissionSelect.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(engineSelect.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(engineSelect.fulfilled, (state, action) => {
        // console.log("action", action.payload);
        (state.isLoading = true),
          (state.error = null),
          (state.engine = action.payload);
      })
      .addCase(engineSelect.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default filtersSlice.reducer;

//  загальний стан, який потім викликається при необхідності через useSelector у файлі ContactList для фільтрації
export const selectCity = (state) => state.filters.city;
export const selectTransmission = (state) => state.filters.transmission;
export const selectEngine = (state) => state.filters.engine;
