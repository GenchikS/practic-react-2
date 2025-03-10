// import { createAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

//  26. переносимо пов'язані файли з файлу actions.js та видаляємо файл actions.js
// export const statusFilter = createAction("filters/statusFilter");

//  27. Переносимо частину tasks початкового стану зі store.js
// const initialState = {
//   filters: {
//     status: "all",
//   },
// };


// //  28. Переносимо з файлу store.js та експортуємо export default function filtersReducer відповідні редюсери
// //  29. Видаляємо ключ filters в case 
// export default function filtersReducer(state = initialState.filters, action){
//   switch (action.type) {
//     case "filters/statusFilter":
//       return {
//         ...state,
//         // filters: {
//           status: action.payload,
//         // },
//       };
//     default:
//       return state;
//   }
// };

//  35. Змінюємо файл на slice
const slice = createSlice({
  name: "filters",
  initialState: {
    filters: {
      status: "all",
    },
  },
  reducers: {
    statusFilter: (state, action) => {
      return {
        ...state,
        status: action.payload,
      };
    }
  },
});

//  36. Експортуємо фабрики екшенів
export const { statusFilter } = slice.actions;

//  37. Експортуємо редюсер слайсу
export default slice.reducer;


//  25. Попереднє в файлі store.js
//  34. Попереднє в файлі tasksSlice.js

//  30. Наступне в файлах Task.js, TaskForm.js, statusFilter.js 
