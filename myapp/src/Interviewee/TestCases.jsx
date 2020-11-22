import React from "react";
import { Tab, Row, Col, Nav} from "react-bootstrap";
import TestCaseForm from "./TestCaseForm";

export default function TestCases() {
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
            <Tab.Content style={{backgroundColor:"white"}}  className="p-4">
            <Tab.Pane eventKey="first">
        <TestCaseForm/>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <TestCaseForm/>
        </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
