import axios from "axios";

//  4. Створюємо шлях запросу по дефолту
axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

//  5.  Створюємо fetch ф-цію для запиту api 
export const fetchTasks = () => async dispatch => {
    try {
        const response = await axios.get("/tasks")
        console.log(response.data);
    } catch (error) {
        return error
    }
}


// 3.  Попереднє в файлі tasksSlice
//  Наступне в файлі 