import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterPizza } from "../actions/pizzaActions";
const Filters = () => {
  const [searchkey, setsearchkey] = useState("");
  const [category, setcategory] = useState("all");
  const dispatch = useDispatch();
  return (
    <div className="p-4 mt-4 filter-container">
      <Form>
        <Row>
          <Col>
            <select
              className="form-select"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
            >
              <option>All</option>
              <option>veg</option>
              <option>nonveg</option>
              <option>cheese</option>
              <option>sauce</option>
            </select>
          </Col>
          <Col>
            <Button className="btn btn-danger btns"
              onClick={() => {
                dispatch(filterPizza(searchkey, category));
              }}
            >
            Filter
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Filters;