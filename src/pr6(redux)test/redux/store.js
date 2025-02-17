import { configureStore } from "@reduxjs/toolkit";

// 3. Створили початковий стан default
const initialState = {
    auto: {
        items: []
    },
    filters: {
        city: "Kharkiv",
        status: "all"
    }
}






// 2. Прописали rooteRedecer
const rootReducer = (state=initialState, action) => {
    switch (action) {
        case "":
            return {
                ...state,
            }
        default:
    return state;
    }
    
}


// 1. Створили store
export const store = configureStore({
    reducer: rootReducer,
})

// 4. Далі в файлі Select