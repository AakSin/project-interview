import React,{useState} from "react";
import { Tab, Row, Col, Nav, Button } from "react-bootstrap";
import TestCaseForm from "./TestCaseForm";

export default function TestCases(props) {
  let code = props.code;
  let input=props.cases[0] ? props.cases[0].input : "";
  const [output,setOutput]=useState("")
  const handleSubmit = (event) => {
    
    fetch(
      "https://cors-anywhere.herokuapp.com/https://project-interview-api.herokuapp.com/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code,
          first:input,
          second:""
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.output)
        setOutput(data.output)
      });
    event.preventDefault();
  };
  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2} lg={1} className="pr-0 pl-3">
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10} lg={11} className="pl-0">
            <Tab.Content style={{ backgroundColor: "white" }} className="p-4">
              <Tab.Pane eventKey="first">
                <TestCaseForm cases={props.cases[0]} output={output?output:"Your Output"} />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <TestCaseForm />
              </Tab.Pane>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Run Test
              </Button>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
