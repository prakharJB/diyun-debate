import {} from "react-bootstrap";
import kialologo from "../Assets/kialohelpcenterlogo.webp";

function ContactForm() {
  return (
    <>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          {/* <img src={kialologo}
                    class="img-fluid"
                    alt="logo-image" />*/}
          <a class="navbar-brand" href="#">
            Diyun-Debate
          </a>
          <a class="navbar-brand" href="#">
            Help Center
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
              לך לקיאלו
            </button>
          </div>
        </div>
      </nav>
      {/* ---------------Search------------ */}

      <form action="" class="input-dat" dir="rtl">
        <h1> איש קשר</h1>
        <p>
          נשמח לשמוע ממך! אם יש לך שאלות או משוב לתת, אל תהסס להשתמש בטופס למטה.
        </p>
        <label for="fname">השם שלך</label>
        <input type="text" name="name" id="id" />
        <label for="fname">האימייל שלך</label>
        <input type="email" name="email" id="id" />
        <label for="fname">נושא</label>
        <input type="subject" name="subject" id="id" />
        <label for="fname">הוֹדָעָה</label>
        <textarea
          name="Message"
          className="contact-txtar"
          id=""
          cols="30"
          rows="10"
        />
        <label for="fname">קבצים מצורפים</label>
        <input type="file" name="myfile" id="myfile" />
        <button type="submit">שלח</button>
      </form>

      {/* <form action="" class="input-dat" dir="rtl">
        <h1> איש קשר</h1>
        <p>
          נשמח לשמוע ממך! אם יש לך שאלות או משוב לתת, אל תהסס להשתמש בטופס למטה.
        </p>
        <label for="fname">השם שלך</label>
        <input type="text" name="name" id="id" />
        <label for="fname">האימייל שלך</label>
        <input type="email" name="email" id="id" />
        <label for="fname">נושא</label>
        <input type="subject" name="subject" id="id" />
        <label for="fname">הוֹדָעָה</label>
        <textarea name="Message" id="" cols="30" rows="10" />
        <label for="fname">קבצים מצורפים</label>
        <input type="file" name="myfile" id="myfile" />
        <button type="submit">שלח</button>
      </form> */}

      <br />
      <br />
      <br />
      <br />
      <br />
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          {/* <img src={kialologo}
                    class="img-fluid"
                    alt="logo-image" />*/}
          <a class="navbar-brand" href="#">
            Diyun-Debate
          </a>
          <div>
            <a class="navbar-brand" href="#">
              Help Center
            </a>
            <a class="navbar-brand" href="#">
              English
            </a>
            <a class="navbar-brand" href="#">
              Contact us
            </a>
          </div>
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
              לך לקיאלו
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default ContactForm;
