import tHn from "../locales/he.json";
import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";

const ForgetPassword = (props) => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleForgetsubmit = (e) => {
    e.preventDefault();

    setFormData({
      email: "",
    });
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };
  const handleClose = () => {
    setFormData({
      email: "",
    });
    props.onHide();
  };
  const handleLoginModalOpen = () => {
    props.switchToLogin(); // Call the callback function to switch to the login modal
    handleClose();
  };
  return (
    <>
      <Modal {...props} size="lg" centered dir="rtl">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <h1>{tHn.Password_recovery}</h1>
          </div>
          <div className="text-center">
            {/* <div>
              <span
                className="modal-signup-btn mx-1"
                onClick={() => handleLoginModalOpen(true)}
              >
                {tHn.sign_up}
              </span>
              במקום?
            </div> */}
          </div>
          <Form onSubmit={(e) => handleForgetsubmit(e)}>
            <Form.Group className="mt-4" controlId="formEmail">
              <Form.Label className="text-center">
                קבל אימייל להגדרת סיסמה חדשה.
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="הזן אימייל"
                name="email"
                required
                onChange={handleChange}
              />
            </Form.Group>

            <div className="text-center">
              <Button
                className="my-4 px-4"
                variant="primary"
                type="submit"
              >
                {tHn.Reset_Password}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ForgetPassword;
