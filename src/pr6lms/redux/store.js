import { configureStore } from "@reduxjs/toolkit"

//  3. Створили початковий дефолтний стан
const initialState = {
  tasks: {
    items: [
      { id: 0, text: "Learn HTML and CSS", completed: true },
      { id: 1, text: "Get good at JavaScript", completed: true },
      { id: 2, text: "Master React", completed: false },
      { id: 3, text: "Discover Redux", completed: false },
      { id: 4, text: "Build amazing apps", completed: false },
    ],
  },
  filters: {
    status: "all",
  },
};

//  2. Створили rootReducer, додали state та action, повертаємо state
//  4. Дали початковому стану дефолтне значення
const rootReducer = (state = initialState, action) => {
  return state;
}

// 1. Створили store та додали reducer: rootReducer
export const store = configureStore({
  reducer: rootReducer,
});