import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CodeBox from "./CodeBox";
import { Tabs, Tab, Form, Button } from "react-bootstrap";
import TestCases from "./TestCases.jsx";

export default function QuestionPage(props) {
  const [loading, setLoading] = useState(false); //false when code hasn't been set to run
  let { number } = useParams(); //question number
  const [code,setCode]=useState(""); // code written by user
  const [customInp,setCustomInp]=useState(""); 
  const [customOut,setCustomOut]=useState("")
  useEffect(() => {
    props.onUpdateIndex(parseInt(number)); //sets active question number on sidebar
  });
  // function to receive code from child CodeBox component
  let passParent=(childCode)=>{
    setCode(childCode) 
  }
  const handleChange=(event)=>{
    setCustomInp(event.target.value);
  }
  const handleSubmit=(event)=>{
    runCode([customInp]).then((answer)=>{
      setCustomOut(answer[0]);
    });
    event.preventDefault();
  }
  async function runCode(inputs) {
    setLoading(true);
    // a is an empty array which will contain all the returned outputs
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
            code, // expands to code:code using ES6
            first: i,
            // uncomment next line if you want a second input. J will need to be defined. API can handle 2 inputs right now.
            // second: j
          }),
        }
      );
      const answer = await response.json();

      a.push(answer.output);
    }
    setLoading(false);
    return a;
  }
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
          <CodeBox passParent={passParent}></CodeBox>
        </div>
        <div>
          <Tabs defaultActiveKey="Test Cases">
            
            {/* tab for Firebase testcases */}
            <Tab eventKey="Test Cases" title="Test Cases" >
              <TestCases runCode={runCode} cases={props.questions[number] ? props.questions[number].testcases.cases : ""} number={number} code={code} interview={props.interview} interviewee={props.employee} number={number}/>
            </Tab>

            {/* tab for custom inputs testcases */}
            <Tab eventKey="Custom Input" title="Custom Input">
              <Form style={{backgroundColor:"white"}} className="p-5">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Custom Input</Form.Label>
                  <Form.Control type="string" placeholder="Enter Custom Input" onChange={handleChange}/>
                </Form.Group>

                <Form.Group>
                  <Form.Label> Output</Form.Label>
                  <Form.Control readOnly plaintext type="text" placeholder={customOut} />
                </Form.Group>
                <Button variant="primary" type="submit" className="mr-2" disabled={loading} onClick={loading ? null : handleSubmit}>
                  Run Test Case
                </Button>
              </Form>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
