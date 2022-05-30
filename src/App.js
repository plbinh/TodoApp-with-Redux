import { Typography, Divider } from "antd";

import "./App.css";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import { setupServer } from "./fakeApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {fetchTodos} from "./components/TodoList/todoListSlice"

if (process.env.NODE_ENV === "development") {
  setupServer();
}

const { Title } = Typography;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
    // eslint-disable-next-line
  }, []);

  return (
    <div
      style={{
        width: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
        overflow: "hidden",
      }}
    >
      <Title style={{ textAlign: "center" }}>TODO APP with REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
