// import { createAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

// export const statusFilter = createAction("filters/statusFilter");


// const initialState = {
//     filters: {
//         status: ["all"]
//     }
// }

// export default function filtersReducer (state = initialState.filters, action){
//   switch (action.type) {
//     case "filters/statusFilter":
//       return {
//         ...state,
//           status: action.payload,
//        };
//     default:
//       return state;
//   }
// };


const slice = createSlice({
  name: "filters",
  initialState: {
    status: ["all"],
  },
  reducers: {
    statusFilter: (state, action) => {
      return {
        ...state,
        status: action.payload,
      };
    }
  },
});

export const { statusFilter } = slice.actions;
export default slice.reducer;