import { configureStore } from "@reduxjs/toolkit"
import taskReducer from "./tasksSlice.js";
import filtersReducer from "./filtersSlice.js";

//  3. Створили початковий дефолтний стан
//  27.1. Після створення слайсів, переносимо частини початкового стану у відповідний слайс та видаляємо з store.js
// const initialState = {
//   tasks: {
//     items: [
//       { id: 0, text: "Learn HTML and CSS", completed: true },
//       { id: 1, text: "Get good at JavaScript", completed: true },
//       { id: 2, text: "Master React", completed: false },
//       { id: 3, text: "Discover Redux", completed: false },
//       { id: 4, text: "Build amazing apps", completed: false },
//     ],
//   },
//   filters: {
//     status: "all",
//   },
// };


//  4. Дали початковому стану дефолтне значення
//  2. Створили rootReducer, додали state та action, повертаємо state
// const rootReducer = (state = initialState, action) => {
//   //  після створення всіх екшенів, необхідно змінити корневий rootReducer та додати switch з вмістом.
//   //  тепер в store type: "task/addTask" добавляється action.payload (те що додаємо в addTask). Беремо розпилюємо state та добавляємо нові дані в tasks.
//   switch (action.type) {
//     case "task/addTask":
//       return {
//         ...state,
//         tasks: {
//           //  розпилюємо масив який є в стані [...state.tasks.items] та до нього добавляємо введені дані action.payload
//           items: [...state.tasks.items, action.payload],
//         },
//       };
//     case "task/deleteTask":
//       // console.log("state", state);
//       return {
//         ...state,
//         tasks: {
//           //  фільтруємо масив який є в стані [state.tasks.items] та повертаємо лише ті об'єкти які не збігаються з id
//           items: state.tasks.items.filter((item) => item.id !== action.payload),
//         },
//       };
//     case "task/toggleTask":
//       return {
//         ...state,
//         tasks: {
//           //  .map масив який є в стані [state.tasks.items], якщо id не збігається, то повертаємо об'єкт, інакше розпилюємо об'єкт та змінюємо ключ на протилежний completed: !item.completed
//             items: state.tasks.items.map((item) => {
//             if (item.id !== action.payload) return item;
//             return {
//               ...item,
//               completed: !item.completed,
//             };
//           }),
//         },
//     }
//     case "filters/statusFilter":
//       return {
//         ...state,
//         filters: {
//           status: action.payload,
//         }
//       }
//     default:
//       return state;
//   }
// }

//  23. Розділяємо rootReducer на два обробника екшенів
//  28.1 Переносимо taskReducer в файл tasksSlice та видаляємо його з файлу store.js
// const taskReducer = (state = initialState.tasks, action) => {
//   switch (action.type) {
//     case "task/addTask":
//       return {
//         ...state,
//         tasks: {
//           //  розпилюємо масив який є в стані [...state.tasks.items] та до нього добавляємо введені дані action.payload
//           items: [...state.tasks.items, action.payload],
//         },
//       };
//     case "task/deleteTask":
//       // console.log("state", state);
//       return {
//         ...state,
//         tasks: {
//           //  фільтруємо масив який є в стані [state.tasks.items] та повертаємо лише ті об'єкти які не збігаються з id
//           items: state.tasks.items.filter((item) => item.id !== action.payload),
//         },
//       };
//     case "task/toggleTask":
//       return {
//         ...state,
//         tasks: {
//           //  .map масив який є в стані [state.tasks.items], якщо id не збігається, то повертаємо об'єкт, інакше розпилюємо об'єкт та змінюємо ключ на протилежний completed: !item.completed
//           items: state.tasks.items.map((item) => {
//             if (item.id !== action.payload) return item;
//             return {
//               ...item,
//               completed: !item.completed,
//             };
//           }),
//         },
//       };
//     default:
//       return state;
//   }
// }

//  28.1 Переносимо taskReducer в файл filtersReducer та видаляємо його з файлу store.js
// const filtersReducer = (state = initialState.filters, action) => {
//   switch (action.type) {
//     case "filters/statusFilter":
//       return {
//         ...state,
//         filters: {
//           status: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// }






// 1. Створили store та додали reducer: rootReducer
export const store = configureStore({
// reducer: rootReducer,
// 24. видаляємо rootReducer та замість нього прописуємо об'єкт з ключами відповідності
// 25. Видаляємо const rootReducer вище, він вже зайвий та переходимо до створення слайсів 26
  reducer: {
// 28.2 імпортуємо редюсери
    tasks: taskReducer,
    filters: filtersReducer,
  },
});

//  5. наступне в файлі StatusFilter.jsx

// 22. попереднє в файлі taskForm
// 26. наступне в файлі tasksSlice та filtersSlice