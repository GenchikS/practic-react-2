// import { createAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

//  26. Переносимо пов'язані файли з файлу actions.js та видаляємо файл actions.js
//  31. Видаляємо файли
// export const addTask = createAction("task/addTask");
// export const deleteTask = createAction("task/deleteTask");
// export const toggleTask = createAction("task/toggleTask");



//  27. Переносимо частину tasks початкового стану зі store.js
// const initialState = {
//   tasks: {
//     items: [
//       { id: 0, text: "Learn HTML and CSS", completed: true },
//       { id: 1, text: "Get good at JavaScript", completed: true },
//       { id: 2, text: "Master React", completed: false },
//       { id: 3, text: "Discover Redux", completed: false },
//       { id: 4, text: "Build amazing apps", completed: false },
//     ],
//   }
// };

// //  28. Переносимо з файлу store.js та експортуємо export default function taskReducer відповідні редюсери
// //  29. Видаляємо ключ tasks в case та в items: state.items.map((item)
// export default function taskReducer(state = initialState.tasks, action) {
//   switch (action.type) {
//     case "task/addTask":
//       return {
//         ...state,
//         // tasks: {
//           //  розпилюємо масив який є в стані [...state.tasks.items] та до нього добавляємо введені дані action.payload
//           items: [...state.items, action.payload],
//         // },
//       };
//     case "task/deleteTask":
//       // console.log("state", state);
//       return {
//         ...state,
//         // tasks: {
//           //  фільтруємо масив який є в стані [state.tasks.items] та повертаємо лише ті об'єкти які не збігаються з id
//           items: state.items.filter((item) => item.id !== action.payload),
//         // },
//       };
//     case "task/toggleTask":
//       return {
//         ...state,
//         // tasks: {
//         //  .map масив який є в стані [state.tasks.items], якщо id не збігається, то повертаємо об'єкт, інакше розпилюємо об'єкт та змінюємо ключ на протилежний completed: !item.completed
//         // 29.1 Видаляємо звернення до .task при map
//         // items: state.task.items.map((item)
//         items: state.items.map((item) => {
//           if (item.id !== action.payload) return item;
//           return {
//             ...item,
//             completed: !item.completed,
//           };
//         }),
//         // },
//       };
//     default:
//       return state;
//   }
// };


//  32. Змінюємо файл на slice
const slice = createSlice({
  name: "tasks",
  initialState: {
    items: [
      { id: 0, text: "Learn HTML and CSS", completed: true },
      { id: 1, text: "Get good at JavaScript", completed: true },
      { id: 2, text: "Master React", completed: false },
      { id: 3, text: "Discover Redux", completed: false },
      { id: 4, text: "Build amazing apps", completed: false },
    ],
  },
  reducers: {
    addTask: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },
    deleteTask: (state, action) => {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    },
    toggleTask: (state, action) => {
       return {
         ...state,
         items: state.items.map((item) => {
           if (item.id !== action.payload) return item;
           return {
             ...item,
             completed: !item.completed,
           };
         }),
        };
    }
  },
});

//  33. Експортуємо фабрики екшенів
export const { addTask, deleteTask, toggleTask } = slice.actions;

//  34. Експортуємо редюсер слайсу
export default slice.reducer;


//  25. Попереднє в файлі store.js

//  30. Наступне в файлах Task.js, TaskForm.js, statusFilter.js

//  35. Наступне в filtersSlice.js