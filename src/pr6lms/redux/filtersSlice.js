import { createAction } from "@reduxjs/toolkit";

//  26. переносимо пов'язані файли з файлу actions.js та видаляємо файл actions.js
export const statusFilter = createAction("filters/statusFilter");

//  27. Переносимо частину tasks початкового стану зі store.js
const initialState = {
  filters: {
    status: "all",
  },
};


//  28. Переносимо з файлу store.js та експортуємо export default function filtersReducer відповідні редюсери
//  29. Видаляємо ключ filters в case 
export default function filtersReducer(state = initialState.filters, action){
  switch (action.type) {
    case "filters/statusFilter":
      return {
        ...state,
        // filters: {
          status: action.payload,
        // },
      };
    default:
      return state;
  }
};

//  25. попереднє в файлі store.js

// 30. Наступне в файлах Task.js, TaskForm.js, statusFilter.js 
