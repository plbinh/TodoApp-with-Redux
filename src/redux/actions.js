// actions creator

export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const filterByText = (text) => {
  return {
    type: "filters/filterByText",
    payload: text,
  };
};

export const filterByStatus = (status) => {
  return {
    type: "filters/filterByStatus",
    payload: status,
  };
};

export const filterByPriority = (priority) => {
  return {
    type: "filters/filterByPriority",
    payload: priority,
  };
};

export const ChangeStatusTodo = (todoId) => {
    return {
      type: "todoList/ChangeStatusTodo",
      payload: todoId,
    };
  };
