import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    status: "all",
  },
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;

export default filtersSlice.reducer;

//  14.  Додамо селектори для того, щоб були одні змінні за станами на весь файл
export const selectStatusFilter = (state) => state.filters.status;
//  13.  Попереднє в файлі taskSlice
//  15.  Наступне в файлі App7lms, TaskList, taskCounter, statusFilter
