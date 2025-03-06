import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    tasks: {
        items: [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56", options: "good" },
  {id: "id-2", name: "Hermione Kline", number: "443-89-12", options: "neutral"},
  { id: "id-3", name: "Eden Clements", number: "645-17-79", options: "good" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26", options: "bad" },
  { id: "id-5", name: "Ann Cand", number: "656-91-26", options: "bad" },
  { id: "id-6", name: "En Cents", number: "695-67-99", options: "good" },
  { id: "id-7", name: "Ross Sun", number: "459-11-86", options: "good" },
  { id: "id-8", name: "Herone Kline", number: "447-69-92", options: "neutral" },
  { id: "id-9", name: "Antonio Candy", number: "216-91-36", options: "bad" },
  { id: "id-10", name: "Endre Kensi", number: "825-17-94", options: "good" },
  { id: "id-11", name: "Cossite Lunu", number: "229-67-33", options: "good" },
        ]
    },
    filters: {
        status: ["all"]
    }
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "task/statusFilter":
        return {
          ...state,
          filters: {
            status: action.payload,
          },
        };
      case "task/deleteContact":
        return {
          ...state,
            tasks: {
                items: state.tasks.items.filter((item) => item.id !== action.payload),
            },
        };
      case "task/searchContact":
        return {
          ...state,
          tasks: {
            items: initialState.tasks.items.filter((item) => {
              if (
                item.name.toLowerCase().includes(action.payload)
              ) {
                return item;
              }
            }),
          },
        };
      case "task/addContact":
        return {
          ...state,
          tasks: {
            items: [...state.tasks.items, action.payload]
          }
        }
      default:
        return state;
    }
};

export const store = configureStore({
    reducer: rootReducer,
})
