import {} from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";

// Define your API endpoint here   /* API FOR LOGIN */
const API_ENDPOINT = "https://laradebate.jmbliss.com/api/contact-form";

const Contactus = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
    attachments: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      // Use the API endpoint constant here
      const response = await axios.post(API_ENDPOINT, formData);
      console.log(response.data); // Handle success response
    } catch (error) {
      if (error.response) {
        console.error("Error submitting form:", error.response.data);
      } else {
        console.error("Error submitting form:", error.message);
      }
    }
  };

  // function Contactus() {

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div class="container-fluid header-nav">
          {/* <img src={kialologo}
                    class="img-fluid"
                    alt="logo-image" />*/}
          <a class="navbar-brand" href="#">
            דייון
          </a>
          <a class="navbar-brand" href="#">
            מרכז עזרה
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <button type="button" class="btn btn-primary">
              לורם איפסום
            </button>
          </div>
        </div>
      </nav>
      {/ ---------------Search------------ /}
      <div className="frm-cnt">
        <form className="example contct-us">
          <input
            type="search"
            placeholder="Search.."
            name="search"
            class="cnt-frm"
          />
        </form>

        <form action="" className="input-dat cont-details my-5" dir="rtl">
          <h1> איש קשר</h1>
          <p>
            נשמח לשמוע ממך! אם יש לך שאלות או משוב לתת, אל תהסס להשתמש בטופס
            למטה.
          </p>
          <div className="type-txt">
            <label for="fname">השם שלך</label>
            <input
              type="text"
              name="fullname"
              id="id"
              onChange={handleChange}
              class="cnt-frm"
            />
          </div>
          <div className="type-txt">
            <label for="fname">האימייל שלך</label>
            <input
              type="email"
              name="email"
              id="id"
              onChange={handleChange}
              class="cnt-frm"
            />
          </div>
          <div className="type-txt">
            <label for="fname">נושא</label>
            <input
              type="subject"
              name="subject"
              id="id"
              onChange={handleChange}
              class="cnt-frm"
            />
          </div>
          <div className="type-txt">
            <label for="fname">הוֹדָעָה</label>
            <textarea
              name="message"
              className="contact-txtar cnt-frm"
              id=""
              onChange={handleChange}
              cols="30"
              rows="10"
            />
          </div>
          <div className="type-txt">
            <label for="fname">קבצים מצורפים</label>
            <input
              type="file"
              name="myfile"
              id="myfile"
              onChange={handleChange}
              class="cnt-frm"
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            שלח
          </button>
        </form>
      </div>{" "}
      <br />
      <hr></hr>
      {/ --------------------------Footer-------------------------------- /}
      <nav className="navbar navbar-expand-lg">
        <div class="container-fluid footer-fl">
          <div className="footer-n">
            <a class="navbar-brand" href="#">
              דייון
            </a>
            <a class="navbar-brand" href="#">
              מרכז עזרה
            </a>
          </div>
          <div className="nav-engl ftr-nav">
            <a class="navbar-brand text-primary" href="#">
              אנגלית
            </a>
          </div>
          <div className="nav-cnt ftr-nav">
            <a class="navbar-brand text-primary" href="#">
              צור קשר
            </a>
          </div>
          <div className="ftr-nav">
            <button type="button" class="btn btn-primary ftr-nav">
              לורם איפסום
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Contactus;
