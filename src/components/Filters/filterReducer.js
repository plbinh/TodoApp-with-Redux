const initState = {
  search: "",
  status: "All",
  prioriry: [],
};

// actions look like this
// {
//     type: "todoList/addTodo",
//     payload: { id: 4, name: "AD carry", complete: false, prioriry: "High" },
// }

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case "filters/filterByText":
      return {
        ...state,
        search: action.payload,
      };
    case "filters/filterByStatus":
      return {
        ...state,
        status: action.payload,
      };
    case "filters/filterByPriority":
      return {
        ...state,
        prioriry: action.payload,
      };

    default:
      return state;
  }
};

export default filterReducer;
