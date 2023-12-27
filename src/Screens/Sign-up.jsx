import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Container, Col, Row } from "react-bootstrap";
import Header from "../Layouts/Header";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignup = () => {
    // Implement signup logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Username:", username);
  };
  return (
    <>
      <Header />
      <section dir="rtl">
        <Container>
          <Row>
            <Col md={6} className="mt-4 mx-auto">
              <Form>
                <Form.Group className="mt-4" controlId="formEmail">
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control
                    type="email"
                    placeholder="הזן אימייל"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mt-4" controlId="formPassword">
                  {/* <Form.Label>Password</Form.Label> */}
                  <Form.Control
                    type="password"
                    placeholder="סיסמה"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mt-4" controlId="formUsername">
                  {/* <Form.Label>Username</Form.Label> */}
                  <Form.Control
                    type="text"
                    placeholder="הכנס שם משתמש"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>

                <Button
                  className="mt-4"
                  variant="primary"
                  type="button"
                  onClick={handleSignup}
                >
                  הירשם
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Signup;
