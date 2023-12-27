// import React, { useState } from "react";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";
// import Header from "../Layouts/Header";

// function DebateAdd() {
//   const initialFormData = {
//     name: "",
//     thesis: "",
//     image: "",
//     tags: "",
//     backgroundInfo: "",
//   };
//   const [formData, setFormData] = useState({ ...initialFormData });
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here
//     console.log("Form submitted:", formData);
//   };
//   const handleCancel = () => {
//     setFormData({ ...initialFormData });
//   };

//   return (
//     <>
//       <Header />
//       <section dir="rtl">
//         <Container>
//           <Row className="justify-content-md-center mt-4">
//             <Col md={8}>
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group controlId="formName">
//                   <Form.Label className="mt-4">שֵׁם</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="כותרת הדיון"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>

//                 <Form.Group controlId="formThesis">
//                   <Form.Label className="mt-4">תזה</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="הכנס לתזה שלך"
//                     name="thesis"
//                     value={formData.thesis}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>

//                 <Form.Group controlId="formImage">
//                   <Form.Label className="mt-4">תמונה</Form.Label>
//                   <Form.Control
//                     type="file"
//                     placeholder="בחר תמונה"
//                     name="image"
//                     value={formData.image}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>

//                 <Form.Group controlId="formTags">
//                   <Form.Label className="mt-4">תגים</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="הזן תגים (מופרדים בפסיק)"
//                     name="tags"
//                     value={formData.tags}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>

//                 <Form.Group controlId="formBackgroundInfo">
//                   <Form.Label className="mt-4">מידע רקע</Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     rows={3}
//                     placeholder="הזן מידע רקע"
//                     name="backgroundInfo"
//                     value={formData.backgroundInfo}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>

//                 <Button className="my-4" variant="primary" type="submit">
//                   שלח
//                 </Button>
//                 <Button
//                   className="m-4"
//                   variant="secondary"
//                   type="button"
//                   onClick={handleCancel}
//                 >
//                   אִתחוּל
//                 </Button>
//               </Form>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// }

// export default DebateAdd;


import React, { useState } from 'react';
import { Form, Button, ProgressBar } from 'react-bootstrap';

const DebateAdd = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ProgressBar now={(step / 3) * 100} />
      {step === 1 && (
        <Form.Group controlId="formStep1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Group>
      )}
      {step === 2 && (
        <Form.Group controlId="formStep2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>
      )}
      {step === 3 && (
        <Form.Group controlId="formStep3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </Form.Group>
      )}
      <div className="d-flex justify-content-between">
        {step > 1 && (
          <Button variant="secondary" onClick={handlePrevious}>
            Previous
          </Button>
        )}
        {step < 3 ? (
          <Button variant="primary" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button variant="primary" type="submit">
            Submit
          </Button>
        )}
      </div>
    </Form>
  );
};

export default DebateAdd;