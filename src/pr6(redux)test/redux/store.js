import { configureStore } from "@reduxjs/toolkit";

// 3. Створили початковий стан default
const initialState = {
    auto: {
        items: []
    },
    filters: {
        city: "all",
        transmission: "all",
        engine: "all"
    }
}






// 2. Прописали rooteRedecer
const rootReducer = (state=initialState, action) => {
    switch (action.type) {
      case "task/citySelect":
        return {
          ...state,
          filters: {
            // city: console.log(state),
            city: action.payload,
            transmission: state.filters.transmission,
            engine: state.filters.engine,
          },
        };
      case "task/transmission":
        return {
          ...state,
          filters: {
            transmission: action.payload,
            city: state.filters.city,
            engine: state.filters.engine,
          },
        };
      case "task/engine":
        return {
          ...state,
          filters: {
            // engine: console.log(action.payload),
            engine: action.payload,
            city: state.filters.city,
            transmission: state.filters.transmission,
          },
        };
      // case "task/array":
      //   return {
      //     state,
      //   };
      default:
        return state;
    }
    
}


// 1. Створили store
export const store = configureStore({
    reducer: rootReducer,
})

// 4. Далі в файлі Select