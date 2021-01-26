import React, { useState, useEffect } from "react";
import { Tab, Row, Col, Nav, Button } from "react-bootstrap";
import TestCaseForm from "./TestCaseForm";
import { updateCode, verifySolution } from "./models/interviewee.js";

export default function TestCases(props) {
  let code = props.code;
  let number = props.number;
  const [output, setOutput] = useState([]);
  const [isCorrect, setIsCorrect] = useState({});
  const [caseNo, setCaseNo] = useState(0);
  let input = Object.keys(props.cases).map((i) => props.cases[i].input);
  let expected = Object.keys(props.cases).map((i) => props.cases[i].output);

  async function runCode(inputs) {
    setLoading(true);
    let a = [];
    for (const i of inputs) {
      const response = await fetch(
        "https://project-interview-api.herokuapp.com/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            code,
            first: i,
          }),
        }
      );
      const answer = await response.json();

      a.push(answer.output);
    }
    setLoading(false);
    return a;
  }

  useEffect(() => {
    setIsCorrect({});
    let b = {};
    for (let i = 0; i < output.length; i++) {
      b[i] = output[i] === expected[i];
    }
    setIsCorrect(b);
    updateCode(props.interview, props.interviewee, code);
  }, [output]);
  useEffect(() => {
    if (isCorrect[1]) {
      verifySolution(props.interview, props.interviewee, number, "0");
    }
  }, [isCorrect]);

  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    runCode(input).then(a=>{
      setOutput(a);
    });
    event.preventDefault();
  };
  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="0">
        <Row>
          {/* <Col sm={2} lg={1} className="pr-0 pl-3">
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first"><i className={"fas fa-check-circle  mr-2 text-success "+(isCorrect[1]?"d-inline":"d-none")}></i>1</Nav.Link>
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
              <Button variant="primary" type="submit"  onClick={loading?null:handleSubmit} disabled={loading}>
                Run Test
              </Button>
            </Tab.Content>
          </Col> */}
          <Col sm={2} lg={1} className="pr-0 pl-3">
            <Nav variant="pills" className="flex-column">
              {Object.keys(props.cases).map((i) => (
                <Nav.Item key={i}>
                  <Nav.Link onClick={() => setCaseNo(i)} eventKey={i}>
                    <i
                      className={
                        "fas fa-check-circle  mr-2 text-success " +
                        (isCorrect[i] ? "d-inline" : "d-none")
                      }
                    ></i>
                    {i}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col sm={10} lg={11} className="pl-0">
            <Tab.Content style={{ backgroundColor: "white" }} className="p-4">
              {Object.keys(props.cases).map((i) => (
                <Tab.Pane key={i} eventKey={i}>
                  <TestCaseForm
                    cases={props.cases[i]}
                    output={output[i] ? output[i] : "Your Output"}
                  />
                </Tab.Pane>
              ))}
              <Button
                variant="primary"
                type="submit"
                onClick={loading ? null : handleSubmit}
                disabled={loading}
              >
                Run Test
              </Button>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
