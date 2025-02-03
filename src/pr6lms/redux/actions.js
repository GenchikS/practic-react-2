//  17. створення фабрики екшенів 
export const addTask = newTask => {
    return {
        type: "task/addTask",
        payload: newTask
    };
};

// якщо перевірити, то отримаємо об'єкт з {type: "task/addTask", payload: "hello"}
//  console.log("addTask", addTask("hello"));