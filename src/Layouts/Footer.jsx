import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <>
      <section className="pt-4" dir="rtl" >
        <Container>
          <Row>
            <Col>
              <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                <div className="col mb-3">
                  <a
                    href="/"
                    className="d-flex align-items-center mb-3 link-dark text-decoration-none"
                  >
                    <svg className="bi me-2" width="40" height="32">
                      <use href="#bootstrap"></use>
                    </svg>
                  </a>
                  <p className="text-muted">© 2023</p>
                </div>

                <div className="col mb-3"></div>

                <div className="col mb-3">
                  <h5>סָעִיף</h5>
                  <ul className="nav flex-column p-0">
                    <li className="nav-item mb-2">
                      <a href="/" className="nav-link p-0 text-muted">
                        בית
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="/" className="nav-link p-0 text-muted">
                        בית
                      </a>
                    </li>
                    
                  </ul>
                </div>

                <div className="col mb-3">
                  <h5>סָעִיף</h5>
                  <ul className="nav flex-column p-0">
                    <li className="nav-item mb-2">
                      <a href="/" className="nav-link p-0 text-muted">
                        בית
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="/" className="nav-link p-0 text-muted">
                        בית
                      </a>
                    </li>
                    
                  </ul>
                </div>

                <div className="col mb-3">
                  <h5>סָעִיף</h5>
                  <ul className="nav flex-column p-0">
                    <li className="nav-item mb-2">
                      <a href="/" className="nav-link p-0 text-muted">
                        בית
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="/" className="nav-link p-0 text-muted">
                        בית
                      </a>
                    </li>
                    
                  </ul>
                </div>
              </footer>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Footer;
