// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composeEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composeEnhancers);

// export default store;

import filterSlice from "../components/Filters/filterSlice";
import todoListSlice from "../components/TodoList/todoListSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});

export default store;
