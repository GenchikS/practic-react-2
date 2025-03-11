// 12. Створюємо createSlice
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    city: "all",
    transmission: "all",
    engine: "all",
  },
  reducers: {
    citySelect: (state, action) => {
      return {
        ...state,
        //  12.1 Видаляємо шлях filrers: {}
        // filters: {
        city: action.payload,
        // 12.2 Змінюємо шлях стану
        //   transmission: state.filters.transmission,
        transmission: state.transmission,
        // transmission: console.log(state.transmission),
        //   engine: state.filters.engine,
        engine: state.engine,
        // engine: console.log(state.engine),
        // },
      };
    },
    transmissionSelect: (state, action) => {
      return {
        ...state,
        // filters: {
          transmission: action.payload,
          city: state.city,
          engine: state.engine,
        // },
      };
    },
    engineSelect: (state, action) => {
      return {
        ...state,
        // filters: {
          engine: action.payload,
          city: state.city,
          transmission: state.transmission,
        // },
      };
    },
  },
});

export const { citySelect, transmissionSelect, engineSelect } = slice.actions;
export default slice.reducer;

//  11. Попереднє в файлі autoSlice
//  13. Наступне в файлі store

