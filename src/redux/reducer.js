import filterReducer from "../components/Filters/filterReducer";
import todoListReducer from "../components/TodoList/todoListReducer";

// Kết hợp các Reducer laị để code ngắn gọn hơn 
import { combineReducers } from "redux";

// const rootReducer = (state = {}, action) => {
//   return {
//     filters: filterReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action),
//   };
// };

const rootReducer = combineReducers({
  filters: filterReducer,
  todoList: todoListReducer,
});

export default rootReducer;
