import { configureStore } from "@reduxjs/toolkit";

// 3. Створили початковий стан default
const initialState = {
    auto: {
        items: []
    },
    filters: {
        city: "all",
        transmission: "all"
    }
}






// 2. Прописали rooteRedecer
const rootReducer = (state=initialState, action) => {
    switch (action.type) {
      case "task/citySelect":
        return {
          ...state,
          filters: {
            city: action.payload,
          },
        };
      case "task/transmission":
        return {
          ...state,
          filters: {
            transmission: action.payload,
          },
        };
      case "task/contacts":
        return {
          ...state,
          auto: {
            // items: console.log(action.payload),
            items: action.payload,
          },
        };
      default:
        return state;
    }
    
}


// 1. Створили store
export const store = configureStore({
    reducer: rootReducer,
})

// 4. Далі в файлі Select