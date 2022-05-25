import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { filterByText, filterByStatus, filterByPriority } from "../../redux/actions";
import filterSlice from "./filterSlice";
const { Search } = Input;

export default function Filters() {
  const [filterText, setFilterText] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterPriority, setFilterPriority] = useState([]);

  const dispatch = useDispatch();

  const handleFilterText = (e) => {
    setFilterText(e.target.value);
    dispatch(filterSlice.actions.filterByText(e.target.value));
  };

  const handleFilterStatus = (e) => {
    setFilterStatus(e.target.value);
    dispatch(filterSlice.actions.filterByStatus(e.target.value));
  };

  const handleFilterPriority = (value) => {
    setFilterPriority(value);
    dispatch(filterSlice.actions.filterByPriority(value))
  }

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={filterText}
          onChange={handleFilterText}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filterStatus} onChange={handleFilterStatus}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          value={filterPriority}
          onChange={handleFilterPriority}
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
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
      </Col>
    </Row>
  );
}
