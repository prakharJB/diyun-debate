import tHn from "../locales/he.json";
import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import Login from "./LoginComponent";
import axios from "axios";
import toast from "react-hot-toast";
// import { Formik , Form, Field } from "formik";
import * as Yup from "yup";

const Signup = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    password_confirmation: "",
    username: "",
  });

  const handleClose = () => {
    setFormData({
      email: "",
      password: "",
      name: "",
      password_confirmation: "",
      username: "",
    });
    props.onHide();
  };
  const [passwordError, setPasswordError] = useState();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    if (formData.password !== formData.password_confirmation) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/api/register`,
          formData
        );
        console.log("Signup successful!", response);
        if (response.data.message == "Registeration Successful") {
          toast.success("please check your mail");
        }
        // You can handle the successful signup here, e.g., redirect the user or show a success message.
      } catch (error) {
        console.error("Signup failed!", error.response.data);

        toast.error(error.response.data.message);
      }

      setFormData({
        email: "",
        password: "",
        name: "",
        password_confirmation: "",
        username: "",
      });
      // Add your form submission logic here
      console.log("Form submitted:", formData);
      handleClose();
    }
  };
  const handleLoginModalOpen = () => {
    props.switchToLogin(); // Call the callback function to switch to the login modal
    handleClose();
  };

  return (
    <>
      <Modal {...props} size="lg" centered dir="rtl">
        <Modal.Header closeButton>
          <Modal.Title
            title="Go to Homepage"
            className="cursor-pointer"
            onClick={handleClose}
          >
            {tHn.Diyun}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <h1>{tHn.sign_up}</h1>
          </div>
          <div className="text-center">
            <div>
              <span
                className="modal-signup-btn mx-1"
                onClick={() => handleLoginModalOpen(true)}
              >
                {tHn.log_in}
              </span>
              במקום?
            </div>
          </div>
          <Form onSubmit={(e) => handleSignup(e)}>
            <Form.Group className="mt-4" controlId="formname">
              <Form.Control
                type="text"
                placeholder="הכנס שם משתמש"
                name="name"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mt-4" controlId="formUsername">
              <Form.Control
                type="text"
                placeholder="הכנס שם משתמש"
                name="username"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mt-4" controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="הזן אימייל"
                name="email"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mt-4" controlId="formPassword">
              <Form.Control
                type="password"
                placeholder="סיסמה"
                name="password"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mt-4" controlId="formConfirmationPassword">
              <Form.Control
                type="password"
                placeholder="סיסמה"
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
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Signup;
