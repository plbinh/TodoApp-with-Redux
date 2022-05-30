import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { v4 as idv4 } from "uuid";
import { useRef, useState } from "react";

// import { addTodo } from "../../redux/actions.js";
import Todo from "../Todo";
import { todoRemaningSelector } from "../../redux/selector";
import {addNewTodo} from "./todoListSlice";

export default function TodoList() {
  const [todo, setTodo] = useState("");
  const [prioriry, setPrioriry] = useState("Medium");
  const inputTodoRef = useRef();
  const todoList = useSelector(todoRemaningSelector);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(
      addNewTodo({
        id: idv4(),
        name: todo,
        complete: false,
        prioriry: prioriry,
      })
    );
    setTodo("");
    setPrioriry("Medium");
    inputTodoRef.current.focus();
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            value={todo}
            ref={inputTodoRef}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Select
            value={prioriry}
            defaultValue="Medium"
            onChange={(value) => setPrioriry(value)}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAdd}>
            Add
          </Button>
        </Input.Group>
      </Col>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            prioriry={todo.prioriry}
            completed={todo.complete}
          />
        ))}
      </Col>
    </Row>
  );
}
