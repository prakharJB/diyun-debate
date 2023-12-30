import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const Following = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col className="select-languages d-flex justify-content-end mt-0 my-5">
            <Form.Select aria-label="Default select example">
              <option>Most Recent Activity</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <p className="text-center">
                There’s nothing here yet! Click “Follow” in a discussion to be
                notified of new claims and changes.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Following;
