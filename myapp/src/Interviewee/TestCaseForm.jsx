import React from "react";
import { Form} from "react-bootstrap";
export default function TestCaseForm(props) {
  

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Input</Form.Label>
          <Form.Control plaintext readOnly type="text" placeholder={props.cases? props.cases.input : ""} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Expected</Form.Label>
          <Form.Control plaintext readOnly type="text" placeholder={props.cases? props.cases.output : ""} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Your Output</Form.Label>
          <Form.Control plaintext readOnly as="textarea" type="text" placeholder={props.output} rows={3} />
        </Form.Group>


      </Form>
    </div>
  );
}
