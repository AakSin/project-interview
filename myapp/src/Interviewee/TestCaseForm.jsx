import React from "react";
import { Form, Button } from "react-bootstrap";
export default function TestCaseForm() {
  let code=`
a=8
b=6
print(a+b)
`
  const handleSubmit = (event) => {

    fetch("https://cors-anywhere.herokuapp.com/https://project-interview-api.herokuapp.com/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        code
      })
    })
    .then(response => response.json())
    .then(data => console.log(data));
    event.preventDefault();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Input</Form.Label>
          <Form.Control type="email" placeholder="Input" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Expected</Form.Label>
          <Form.Control type="password" placeholder="Expected" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Your Output</Form.Label>
          <Form.Control type="password" placeholder="Your Output" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Run Test
        </Button>
      </Form>
    </div>
  );
}
