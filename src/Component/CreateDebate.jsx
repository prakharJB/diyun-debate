import tHn from "../locales/he.json";
import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { MyContext } from "./SunBurst";

const CreateDebate = (props) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    thesis: "",
    tags: "",
    backgroundinfo: "",
    isDebatePublic: "",
    isType: "",
    image: "",
  });

  const handleClose = () => {
    setFormData({
      title: "",
      thesis: "",
      tags: "",
      backgroundinfo: "",
      isDebatePublic: "",
      isType: null,
    });
    setStep(1);
    props.onHide();
  };
  const handleImgChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { text, setText } = useContext(MyContext);
  const fetchData = async () => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}/api/showalldebate`;
      const responseData = await axios.get(url);
      // console.log("API Response:", responseData.data);
      setText(responseData.data.mainDebates);
      return responseData.data.mainDebates;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.backgroundinfo === "" || formData.tags === "") {
      setErrors({
        backgroundinfo: "נדרש מידע רקע",
        tags: "יש צורך בתגים",
      });
      return;
    }

    const {
      title,
      thesis,
      tags,
      backgroundinfo,
      isDebatePublic,
      isType,
      image,
    } = formData;
    const data = new FormData();
    data.append("title", title);
    data.append("thesis", thesis);
    data.append("tags", tags);
    data.append("backgroundinfo", backgroundinfo);
    data.append("isDebatePublic", isDebatePublic);
    data.append("isType", isType);
    data.append("file", image);

    try {
      const result = await axios.post(
        "https://laradebate.jmbliss.com/api/createdebate",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
        
      );
      await fetchData()
    } catch (error) {
      console.error("Error submitting the form:", error);
    }

    setFormData({
      title: "",
      thesis: "",
      file: "",
      tags: "",
      backgroundinfo: "",
      isDebatePublic: "",
      isType: "",
    });
    handleClose();
  };
  const [errors, setErrors] = useState(false);

  const handleNext = () => {
    // Validate fields based on the current step
    switch (step) {
      case 1:
        if (formData.isDebatePublic === "") {
          setErrors({ isDebatePublic: "זהו שדה חובה" });
          return;
        }
        break;
      case 2:
        if (formData.title === "") {
          setErrors({ title: "נדרשת כותרת" });
          return;
        }
        if (formData.thesis === "") {
          setErrors({ thesis: "נדרשת עבודת גמר" });
          return;
        }
        break;
      case 3:
        if (formData.isType === "") {
          setErrors({ isType: "זהו שדה חובה" });
          return;
        }
        break;

      default:
        break;
    }

    setErrors({}); // Reset errors
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <>
      <Modal
        id="debate-modal"
        {...props}
        size="lg"
        centered
        dir="rtl"
        backdrop="static"
      >
        <Modal.Header closeButton>
          {/* <Modal.Title>{tHn.log_in}</Modal.Title> */}
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body className="mb-4">
            {step === 1 && (
              <div>
                <h1 className="mb-4">{tHn.Private_or_public}</h1>
                <Form.Group controlId="formRadio">
                  <div className="d-flex flex-column mt-4">
                    <Form.Check
                      inline
                      type="radio"
                      label={tHn.Private}
                      checked={formData.isDebatePublic === "false"}
                      value="false"
                      name="isDebatePublic"
                      id="radioOption1"
                      onChange={handleChange}
                      className="my-4"
                    />
                    <div>
                      <p>
                        רק אנשים שהוזמנו יכולים לראות את הדיון. תוכל לפרסם אותו
                        בשלב מאוחר יותר.
                      </p>
                    </div>
                    <Form.Check
                      inline
                      type="radio"
                      label={tHn.Public}
                      name="isDebatePublic"
                      checked={formData.isDebatePublic === "true"}
                      value="true"
                      id="radioOption2"
                      onChange={handleChange}
                      className="my-4"
                    />
                    {/* Add more radio options as needed */}
                    <div>
                      <p>
                        כולם יכולים למצוא ולצפות בדיון שלך. משתמשים לא מוזמנים
                        יוכלו להציע טענות והערות, ולאחר מכן תוכל להגיב עליהן.
                      </p>
                    </div>
                  </div>
                </Form.Group>
                {errors.isDebatePublic && (
                  <Form.Text className="text-danger">
                    {errors.isDebatePublic}
                  </Form.Text>
                )}
              </div>
            )}
            {step === 2 && (
              <div>
                <h1 className="mb-4">
                  {tHn.Name} / {tHn.Thesis}
                </h1>
                <Form.Group controlId="formName">
                  <Form.Label className="mt-4">שֵׁם</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="כותרת הדיון"
                    value={formData.title}
                    name="title"
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors.title && (
                  <Form.Text className="text-danger">{errors.title}</Form.Text>
                )}
                <Form.Group controlId="formThesis">
                  <Form.Label className="mt-4">תזה</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="הכנס לתזה שלך"
                    value={formData.thesis}
                    name="thesis"
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors.thesis && (
                  <Form.Text className="text-danger">{errors.thesis}</Form.Text>
                )}
              </div>
            )}
            {step === 3 && (
              <div>
                <h1 className="mb-4">{tHn.Type}</h1>
                <Form.Group controlId="formRadio">
                  <div className="d-flex flex-column mt-4">
                    <Form.Check
                      inline
                      type="radio"
                      label={tHn.Single_Thesis}
                      value="Single Thesis"
                      checked={formData.isType === "Single Thesis"}
                      name="isType"
                      id="radioOption1"
                      onChange={handleChange}
                      className="my-4"
                    />
                    <div>
                      <p>צור מפת טיעונים עם תזה אחת בלבד.</p>
                    </div>
                    <Form.Check
                      inline
                      type="radio"
                      label={tHn.Multiple_Theses}
                      name="isType"
                      checked={formData.isType === "Multiple Theses"}
                      value="Multiple Theses"
                      id="radioOption2"
                      onChange={handleChange}
                      className="my-4"
                    />
                    {/* Add more radio options as needed */}
                    <div>
                      <p>
                        צור מפת ארגומנטים עם תזות מרובות. אלו יכולות להיות
                        תשובות אפשריות לשאלה או בחירות שונות להחלטה.
                      </p>
                    </div>
                  </div>
                </Form.Group>
                {errors.isType && (
                  <Form.Text className="text-danger">{errors.isType}</Form.Text>
                )}
              </div>
            )}
            {step === 4 && (
              <div>
                <h1 className="mb-4">
                  {tHn.Image} / {tHn.Tags} / {tHn.Background_Info}
                </h1>
                <Form.Group controlId="formImage">
                  <Form.Label className="mt-4">תמונה</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder="בחר תמונה"
                    accept=".png, .gif, .jpeg, .webp"
                    // value={formData.image}
                    name="image"
                    onChange={handleImgChange}
                  />
                </Form.Group>

                <Form.Group controlId="formTags">
                  <Form.Label className="mt-4">תגים</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="הזן תגים (מופרדים בפסיק)"
                    value={formData.tags}
                    name="tags"
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors.tags && (
                  <Form.Text className="text-danger">{errors.tags}</Form.Text>
                )}
                <Form.Group controlId="formbackgroundinfo">
                  <Form.Label className="mt-4">מידע רקע</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="הזן מידע רקע"
                    value={formData.backgroundinfo}
                    name="backgroundinfo"
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors.backgroundinfo && (
                  <Form.Text className="text-danger">
                    {errors.backgroundinfo}
                  </Form.Text>
                )}
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex justify-content-between">
              {step > 1 && (
                <Button
                  className="side-mounted-navigation-button side-mounted-navigation-button--right"
                  variant="primary"
                  onClick={handlePrevious}
                >
                  <FaAngleRight />
                </Button>
              )}
              {step < 4 ? (
                <Button
                  className="side-mounted-navigation-button side-mounted-navigation-button--left"
                  variant="primary"
                  onClick={handleNext}
                >
                  <FaAngleLeft />
                </Button>
              ) : (
                <div>
                  <Button
                    className="submit-debate-btn side-mounted-navigation-button side-mounted-navigation-button--left"
                    variant="primary"
                    type="submit"
                  >
                    <IoMdCheckmark />
                  </Button>
                </div>
              )}
            </div>
            <div>{step}/4</div>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default CreateDebate;
