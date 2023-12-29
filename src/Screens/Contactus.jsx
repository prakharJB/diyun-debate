import { } from "react-bootstrap";
import kialologo from "../Assets/kialohelpcenterlogo.webp";

function Contactus() {

    return (
        <>
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid header-nav">
                    {/* <img src={kialologo}
                    class="img-fluid"
                    alt="logo-image" />*/}
                    <a class="navbar-brand" href="#">דייון</a>
                    <a class="navbar-brand" href="#">מרכז עזרה</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <button type="button" class="btn btn-primary">לך לדייון 
                        </button>
                    </div>
                </div>
            </nav>
            {/* ---------------Search------------ */}

            <div className="frm-cnt" >
                <form class="example contct-us" action="/action_page.php">
                    <input type="search" placeholder="Search.." name="search" class="cnt-frm" />
                </form>


                <form action="" class="input-dat cont-details my-5" dir='rtl'>
                    <h1> איש קשר</h1>
                    <p>נשמח לשמוע ממך! אם יש לך שאלות או משוב לתת, אל תהסס להשתמש בטופס למטה.</p>
                    <div className="type-txt" >
                        <label for="fname">השם שלך</label>
                        <input type="text" name="name" id="id" class="cnt-frm" /></div>
                    <div className="type-txt" >
                        <label for="fname">האימייל שלך</label>
                        <input type="email" name="email" id="id" class="cnt-frm" /></div>
                    <div className="type-txt" >
                        <label for="fname">נושא</label>
                        <input type="subject" name="subject" id="id" class="cnt-frm" /></div>
                    <div className="type-txt" >
                        <label for="fname">הוֹדָעָה</label>
                        <textarea name="Message" className="contact-txtar cnt-frm" id="" cols="30" rows="10" /></div>
                    <div className="type-txt" >
                        <label for="fname">קבצים מצורפים</label>
                        <input type="file" name="myfile" id="myfile" class="cnt-frm" /></div>
                    <button type="submit" >שלח</button>
                </form>
            </div> <br />
            <hr></hr>


            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid footer-fl">
                    <div className="footer-n" >
                        <a class="navbar-brand" href="#">דייון</a>
                        <a class="navbar-brand" href="#">מרכז עזרה</a>
                    </div>


                    <div className="nav-engl ftr-nav" >

                        <a class="navbar-brand text-primary" href="#">אנגלית</a>
                    </div>
                    <div className="nav-cnt ftr-nav">
                        <a class="navbar-brand text-primary" href="#">צור קשר</a>
                    </div>
                    <div className="ftr-nav">
                        <button type="button" class="btn btn-primary ftr-nav">לך לקיאלו</button>
                    </div>

                </div>
            </nav>

        </>
    )
}

export default Contactus;