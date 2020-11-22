import React from 'react';
import { Form, Button } from "react-bootstrap";
export default function TestCaseForm() {
    return (
        <div>
            <Form>
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
    )
}
