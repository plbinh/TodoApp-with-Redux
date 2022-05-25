// import { v4 as idv4 } from "uuid";

// const initState = [
//   { id: idv4(), name: "AD carry team", complete: false, prioriry: "High" },
//   { id: idv4(), name: "AD carry opponent", complete: true, prioriry: "Low" },
//   { id: idv4(), name: "AD carry server", complete: true, prioriry: "High" },
//   { id: idv4(), name: "AD carry crep", complete: false, prioriry: "Medium" },
// ];

// // actions look like this
// // {
// //     type: "todoList/addTodo",
// //     payload: { id: 4, name: "AD carry", complete: false, prioriry: "High" },
// // }

// const todoListReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];

//     case "todoList/ChangeStatusTodo":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, complete: !todo.complete }
//           : todo
//       );

//     default:
//       return state;
//   }
// };

// export default todoListReducer;

import { v4 as idv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "todoList",
  initialState: [
    { id: idv4(), name: "AD carry team", complete: false, prioriry: "High" },
    { id: idv4(), name: "AD carry opponent", complete: true, prioriry: "Low" },
    { id: idv4(), name: "AD carry server", complete: true, prioriry: "High" },
    { id: idv4(), name: "AD carry crep", complete: false, prioriry: "Medium" },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    ChangeStatusTodo: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.complete = !currentTodo.complete;
      }
    },
  },
});
