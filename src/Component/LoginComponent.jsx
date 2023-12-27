import tHn from "../locales/he.json";
import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import ForgetPassword from "./ForgetPasswordComponent";
import {useNavigate} from"react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Login = (props) => {
  const navigate = useNavigate();
  const [forgetPasswordModal, setForgetPasswordModal] = useState(false);

  const handleForgetPasswordOpen = () => {
    setForgetPasswordModal(true);
    handleClose();
  };

  const handleSignupModalOpen = () => {
    props.switchToSignup(); // Call the callback function to switch to the signup modal
    handleClose();
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleClose = () => {
    setFormData({
      email: "",
      password: "",
    });
    props.onHide();
  };

  const handleChange =  (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    await axios
    .post("https://backlaravel.mpvoter.com/api/login_route", formData, {
      headers: { "content-type": "application/json" },
    })
    .then((response) => {
      if (response.data.error == "Check Your Email and Password") {
        toast.error("Check Your Email and Password");
      } else {
        const user = {
          username: response?.data?.name,
          email: response?.data?.email,
        };
        localStorage.setItem("user", JSON.stringify(user));
        // navigate("/voting-form", { state: user });
      }
    });
    setFormData({
      email: "",
      password: "",
    });
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    handleClose();
    // navigate("/my")
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
            <h1>{tHn.log_in}</h1>
          </div>
          <div className="text-center">
            <div>
              <span
                className="modal-signup-btn mx-1"
                onClick={() => handleSignupModalOpen(true)}
              >
                {tHn.sign_up}
              </span>
              במקום?
            </div>
          </div>
          <Form onSubmit={(e) => handleLogin(e)}>
            <Form.Group className="mt-4" controlId="formEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                type="email"
                placeholder="הזן אימייל"
                name="email"
                required
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mt-4" controlId="formPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control
                type="password"
                placeholder="סיסמה"
                name="password"
                required
                onChange={handleChange}
              />
            </Form.Group>
            <div
              onClick={() => handleForgetPasswordOpen(true)}
              className="text-decoration-underline my-3 cursor-pointer"
            >
              שכחת את הסיסמא
            </div>
            <div className="text-center">
              <Button className="my-4 px-4" variant="primary" type="submit">
                התחברות
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <ForgetPassword
        show={forgetPasswordModal}
        onHide={() => setForgetPasswordModal(false)}
      />
    </>
  );
};

export default Login;
