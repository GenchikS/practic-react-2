//  18. імпортуємо createAction
import { createAction } from "@reduxjs/toolkit"; 
//  17. створення ф-ції екшенів
// export const addTask = newTask => {
//     return {
//         type: "task/addTask",
//         payload: newTask
//     };
// };

// якщо перевірити, то отримаємо об'єкт з {type: "task/addTask", payload: "hello"}
//  console.log("addTask", addTask("hello"));

//  19. створення ф-ції екшенів можна замінити фабрикою екшенів 
//  Значення властивості type ("task/addTask") передається при оголошенні фабрики. Значення властивості payload це значення аргументу що передається при виклику фабрики
export const addTask = createAction("task/addTask");
// якщо перевірити, то отримаємо об'єкт з {type: "task/addTask", payload: "hello"}
//  console.log("addTask", addTask("hello"));
export const deleteTask = createAction("task/deleteTask")
export const toggleTask = createAction("task/toggleTask");
export const statusFilter = createAction("task/statusFilter");

//  16. попереднє в файлі TaskCounter.jsx
//  20. наступне в файлі TaskForm.jsx