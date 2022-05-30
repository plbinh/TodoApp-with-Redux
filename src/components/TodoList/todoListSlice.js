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

// import { v4 as idv4 } from "uuid";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name: "todoList",
  initialState: { status: "idle", todos: [] },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    ChangeStatusTodo: (state, action) => {
      const currentTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (currentTodo) {
        currentTodo.complete = !currentTodo.complete;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.status = "idle";
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        let currentTodo = state.todos.find(
          (todo) => todo.id === action.payload
        );
        // eslint-disable-next-line
        currentTodo = action.payload;
        console.log("updated", action.payload);
      });
  },
});

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await fetch("/api/todos");
  const data = await res.json();
  return data.todos;
});

export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",
  async (newTodo) => {
    const res = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
    });
    const data = await res.json();
    return data.todos;
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (newTodo) => {
    const res = await fetch("/api/updateTodo", {
      method: "POST",
      body: JSON.stringify(newTodo),
    });
    const data = await res.json();
    return data.todos;
  }
);

export default todoListSlice;
// export function addTodoThunkCreator (todo) {
//   return function addTodoThunk (dispatch, getState) {
//     // handle something
//     // console.log(dispatch());
//     console.log('Before State', getState());

//     dispatch(todoListSlice.actions.addTodo(todo))

//     console.log('After State', getState());
//   }
// }
