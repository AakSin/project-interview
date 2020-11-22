import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CodeBox from "./CodeBox";
import { Tabs, Tab, Form, Button } from "react-bootstrap";
import TestCases from "./TestCases.jsx";

export default function QuestionPage(props) {
  let { number } = useParams();
  useEffect(() => {
    props.onUpdateIndex(parseInt(number));
  });
  return (
    <div className="row">
      <div className="col-4 p-4 info" style={{ backgroundColor: "white" }}>
        <h2>
          {number}.{" "}
          {props.questions[number] ? props.questions[number].title : ""}
        </h2>
        <p>
          {props.questions[number] ? props.questions[number].description : ""}
        </p>
        <p>
          Time Complexity:{" "}
          {props.questions[number] ? props.questions[number].t_comp : ""}
        </p>
      </div>
      <div className="col-8 px-2">
        <div >
          <CodeBox></CodeBox>
        </div>
        <div>
          <Tabs defaultActiveKey="Test Cases">
            <Tab eventKey="Test Cases" title="Test Cases">
              <TestCases />
            </Tab>
            <Tab eventKey="Custom Input" title="Custom Input">
              <Form style={{backgroundColor:"white"}} className="p-5">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Input</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Expected Output</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" className="mr-2">
                  Run Test Case
                </Button>
                <Button variant="success" type="submit" className="mr-2">
                  Add Test Case
                </Button>
              </Form>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
