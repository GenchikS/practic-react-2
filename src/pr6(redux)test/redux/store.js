import { configureStore } from "@reduxjs/toolkit";

import filtersReducer from "./filtersSlice.js"
import autoReducer from "./autoSlice"


// 3. Створили початковий стан default
// const initialState = {
//     auto: {
//         items: []
//     },
//     filters: {
//         city: "all",
//         transmission: "all",
//         engine: "all"
//     }
// }

// // 2. Прописали rooteRedecer
// const rootReducer = (state=initialState, action) => {
//     switch (action.type) {
//       case "filters/citySelect":
//         return {
//           ...state,
//           filters: {
//             // city: console.log(state),
//             city: action.payload,
//             transmission: state.filters.transmission,
//             engine: state.filters.engine,
//           },
//         };
//       case "filters/transmission":
//         return {
//           ...state,
//           filters: {
//             transmission: action.payload,
//             city: state.filters.city,
//             engine: state.filters.engine,
//           },
//         };
//       case "filters/engine":
//         return {
//           ...state,
//           filters: {
//             // engine: console.log(action.payload),
//             engine: action.payload,
//             city: state.filters.city,
//             transmission: state.filters.transmission,
//           },
//         };
//       default:
//         return state;
//     }
// }


// 1. Створили store
// export const store = configureStore({
//     reducer: rootReducer,
// })

// 4. Далі в файлі Select

// Створення slice (створили autoSlice.js)
// 11. Наступне в файлі autoSlice

//  13. Змінюємо store та прибираємо все що вище
export const store = configureStore({
  reducer: {
    auto: autoReducer,
    filters: filtersReducer,
  },
});
//  14. Видаляємо файл action та змінюємо шляхи в файлах SelectCity, SelectTransmission, SelectEngine

//  12. Попереднє в файлі filtersSlice