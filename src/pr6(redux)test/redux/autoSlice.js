// 11. Створюємо createSlice
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auto",
  initialState: {
    items: [],
    },
    reducers: {
  }
});

// export const { } = slice.actions;
export default slice.reducer;

//  Попередня умова в файлі store
// 12. Наступне в файлі filtersSlice;