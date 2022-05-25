// const initState = {
//   search: "",
//   status: "All",
//   prioriry: [],
// };

// // actions look like this
// // {
// //     type: "todoList/addTodo",
// //     payload: { id: 4, name: "AD carry", complete: false, prioriry: "High" },
// // }

// const filterReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filters/filterByText":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "filters/filterByStatus":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     case "filters/filterByPriority":
//       return {
//         ...state,
//         prioriry: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export default filterReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    prioriry: [],
  },

  // Với redux toolkit có thể thao tác trực tiếp trên initialState (mutable) 
  // thay vì  phải copy lại rồi mới được chỉnh sửa như  redux (immutable)core
  reducers: {

    // Redux sẽ tự động tạo actions { type: name/reducer, payload },
    // ta không cần tạo thủ công các actions
    filterByText: (state, action) => {
      state.search = action.payload
    },
    filterByStatus: (state, action) => {
      state.status = action.payload
    },
    filterByPriority: (state, action) => {
      state.prioriry = action.payload
    }
  }
});
