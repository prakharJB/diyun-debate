import { Container, Row, Col } from "react-bootstrap";
import footerLogo from "../Assets/White-logo.png";
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
                          <a
                            href="/explore"
                            className="nav-link p-0 text-muted"
                          >
                            לַחקוֹר
                          </a>
                        </li>
                        <li className="nav-item mb-2">
                          <a href="/search" className="nav-link p-0 text-muted">
                            לחפש
                          </a>
                        </li>
                        <li className="nav-item mb-2">
                          <a href="/tour" className="nav-link p-0 text-muted">
                            סיור
                          </a>
                        </li>
                        <li className="nav-item mb-2">
                          <a href="/about" className="nav-link p-0 text-muted">
                            על אודות
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="col mb-3 text-center">
                      <ul className="nav flex-column p-0">
                        <li className="nav-item mb-2">
                          <a href="/" className="nav-link p-0 text-muted">
                            מה חדש
                          </a>
                        </li>
                        <li className="nav-item mb-2">
                          <a href="/" className="nav-link p-0 text-muted">
                            מדיניות הפרטיות
                          </a>
                        </li>
                        <li className="nav-item mb-2">
                          <a href="/" className="nav-link p-0 text-muted">
                            תנאי השירות
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="col mb-3 text-center">
                      <ul className="nav flex-column p-0">
                        <li className="nav-item mb-2">
                          <a href="/" className="nav-link p-0 text-muted">
                            מרכז עזרה
                          </a>
                        </li>
                        <li className="nav-item mb-2">
                          <a
                            href="/contact-us"
                            className="nav-link p-0 text-muted"
                          >
                            צור קשר
                          </a>
                        </li>
                        <li className="nav-item mb-2">
                          <a href="/status" className="nav-link p-0 text-muted">
                            סטָטוּס
                          </a>
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
      </section>
      <section>
        <img className="w-100" src={footerImg} alt="footer" />
      </section>
    </>
  );
}

export default Footer;
