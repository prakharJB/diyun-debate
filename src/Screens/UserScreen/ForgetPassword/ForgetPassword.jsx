import tHn from "../../../locales/he.json";
import { Form, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import { Formik , Form, Field } from "formik";
import * as Yup from "yup";
import Header from "../../../Layouts/Header";
import Footer from "../../../Layouts/Footer";
import { Container, Row, Col } from "react-bootstrap";

const PasswordForget = (props) => {
  const { token } = useParams();
  const [formData, setFormData] = useState({
    password: "",
    password_confirmation: "",
  });
  const navigate = useNavigate();

  const [passwordError, setPasswordError] = useState();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.password_confirmation) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
      try {
        const response = await axios.post(
          `https://laradebate.jmbliss.com/api/reset-password/${token}`,
          formData
        );
        console.log("Signup successful!", response);
        if (response?.data?.status === "success") {
          toast.success(response?.data?.message);
          navigate("/");
        } else {
          toast.error(response?.data?.message);
        }
      } catch (error) {
        // console.error("Signup failed!", error.response.data);
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <>
      <Header />
      <section className="bg-portal pb-4" dir="rtl">
        <Container>
          <Row>
            <Col md={6} className="mt-4 mx-auto">
              <div className="text-center">
                <h1>{tHn.sign_up}</h1>
              </div>

              <Form onSubmit={(e) => handleSignup(e)}>
                <Form.Group className="mt-4" controlId="formPassword">
                  <Form.Control
                    type="password"
                    placeholder="סיסמה"
                    name="password"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mt-4"
                  controlId="formConfirmationPassword"
                >
                  <Form.Control
                    type="password"
                    placeholder="אימות סיסמה"
                    name="password_confirmation"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                {passwordError === true ? (
                  <p className="text-danger">Password did not match!</p>
                ) : (
                  ""
                )}
                <div className="text-center">
                  <Button className="my-4 px-4" variant="primary" type="submit">
                    הירשם
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default PasswordForget;
