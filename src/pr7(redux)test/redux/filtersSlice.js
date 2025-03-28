// 12. Створюємо createSlice
import { createSlice } from "@reduxjs/toolkit";
// import { citySelect } from "./operations.js";
import { useSelector } from "react-redux";
import { citySelect, fetchTasks, transmissionSelect } from "./operations.js";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    city: "All",
    transmission: "All",
    engine: "All",
  },
  extraReducers: (builder) => {
    builder
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
      });
    
    
        // ...state,
        //  12.1 Видаляємо шлях filrers: {}
        // filters: {
        // city: action.payload,
        // 12.2 Змінюємо шлях стану
        //   transmission: state.filters.transmission,
        // transmission: state.transmission,
        // transmission: console.log(state.transmission),
        //   engine: state.filters.engine,
        // engine: state.engine,
        // engine: console.log(state.engine),
        // },
      
    
    // transmissionSelect: (state, action) => {
    //   return {
    //     ...state,
    //     // filters: {
    //       transmission: action.payload,
    //       city: state.city,
    //       engine: state.engine,
    //     // },
    //   };
    // },
    // engineSelect: (state, action) => {
    //   return {
    //     ...state,
    //     // filters: {
    //       engine: action.payload,
    //       city: state.city,
    //       transmission: state.transmission,
    //     // },
    //   };
    // },
  },
});

// export const { citySelect, transmissionSelect, engineSelect } = FiltersSlice.actions;
export default filtersSlice.reducer;

//  11. Попереднє в файлі autoSlice
//  13. Наступне в файлі store


export const selectCity = (state) => state.filters.city;
export const selectTransmission = (state) => state.filters.transmission;

// console.log("selectCity", selectCity);
export const selectLoad = (state) => state.filters.isLoading;
// console.log("selectLoad", selectLoad);


// export const selectFilterCity = state => {
  // const city = useSelector(selectCity);
  // const cityLoad = useSelector(selectLoad);

  // console.log("state", cityLoad);
// }

