import { Container, Row, Col } from "react-bootstrap";
import footerLogo from "../Assets/Blue-logo.png";
import { Link } from "react-router-dom";
import footerImg from "../Assets/new-white-footer.png";

function Footer() {
  return (
    <>
      <section className="pt-5 border-top footer-sec" dir="rtl">
        <Container>
          <Row>
            <Col>
              <footer className="">
                <Row>
                  <Col className="mb-4 text-center">
                    <Link to="/">
                      <img
                        src={footerLogo}
                        alt="footer Logo"
                        className="img-fluid footer-logo"
                      />
                    </Link>
                  </Col>
                </Row>

                <Row>
                  <Col className="d-flex footer-links">
                    <div className="col mb-3 text-center">
                      <ul className="nav flex-column p-0">
                        <li className="nav-item mb-2">
                          <Link
                            to="/explore"
                            className="nav-link p-0 text-muted"
                          >
                            לַחקוֹר
                          </Link>
                        </li>
                        <li className="nav-item mb-2">
                          <Link to="/search" className="nav-link p-0 text-muted">
                            לחפש
                          </Link>
                        </li>
                        <li className="nav-item mb-2">
                          <Link to="/tour" className="nav-link p-0 text-muted">
                            סיור
                          </Link>
                        </li>
                        <li className="nav-item mb-2">
                          <Link to="/about" className="nav-link p-0 text-muted">
                            על אודות
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="col mb-3 text-center">
                      <ul className="nav flex-column p-0">
                        <li className="nav-item mb-2">
                          <Link to="/" className="nav-link p-0 text-muted">
                            מה חדש
                          </Link>
                        </li>
                        <li className="nav-item mb-2">
                          <Link to="/privacy" className="nav-link p-0 text-muted">
                            מדיניות הפרטיות
                          </Link>
                        </li>
                        <li className="nav-item mb-2">
                          <Link to="/terms" className="nav-link p-0 text-muted">
                            תנאי השירות
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="col mb-3 text-center">
                      <ul className="nav flex-column p-0">
                        <li className="nav-item mb-2">
                          <Link to="/" className="nav-link p-0 text-muted">
                            מרכז עזרה
                          </Link>
                        </li>
                        <li className="nav-item mb-2">
                          <Link
                            to="/contact-us"
                            className="nav-link p-0 text-muted"
                          >
                            צור קשר
                          </Link>
                        </li>
                        <li className="nav-item mb-2">
                          <Link to="/status" className="nav-link p-0 text-muted">
                            סטָטוּס
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </footer>
            </Col>
          </Row>
          <hr />
        </Container>
        <Container className="m-4">
          <div>

          </div>

        </Container>
      </section>
      <section>
        <img className="w-100" src={footerImg} alt="footer" />
      </section>
    </>
  );
}

export default Footer;
