import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
  Card,
} from "react-bootstrap";
import { FaEye, FaPen, FaVoteYea } from "react-icons/fa";
import { TbMessage2, TbUsersGroup } from "react-icons/tb";
import testDog from "../Assets/test-dog-img.jpeg";
import testGpt from "../Assets/test-chatgpt.jpeg";
import testnature from "../Assets/test-nature.jpeg";
import testedu from "../Assets/test-education.jfif";
import testcode from "../Assets/test-code.jfif";
import testrobot from "../Assets/test-robot.jpeg";

function Search() {
  return (
    <>
      <Header />
      <div>
        <section className="searchbar-section">
          <Container>
            <Row>
              <h1>Search</h1>
              <Row className="my-5 serachbar-languages-row">
                <Col className="searchbar">
                  <Form inline>
                    <FormControl
                      type="text"
                      placeholder="Search"
                      className="mr-sm-2"
                    />
                  </Form>
                </Col>

                <Col className="select-languages">
                  <Form.Select aria-label="Default select example">
                    <option>All Languages</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Row>
            </Row>
          </Container>
        </section>

        <section className="search_content_results">
          <Container>
            <Row className="discusiion-head">
              <Col className="searchbar_discussion_header">
                <h2>Discussions(results counts)</h2>
              </Col>
              <Col className="show-navigation">
                <Form.Select aria-label="Default select example">
                  <option value="show-popular">Show Popular</option>
                  <option value="show-all">Show all</option>
                </Form.Select>
              </Col>
            </Row>
            <Row className="cards-row">
              <div className="mt-top">
                <Card>
                  <a href="/">
                    <Card.Img variant="top" src={testGpt} />
                    <Card.Body>
                      <Card.Title>האם יש לאסור ניסויים בבעלי חיים?</Card.Title>
                      {/* <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text> */}
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </a>
                  <hr />
                  <div className="color-text-icon d-flex align-items-center justify-content-evenly m-0">
                    <TbMessage2 />
                    <Card.Text className="m-0">749</Card.Text>
                    <FaPen />
                    <Card.Text className="m-0">10.9ר</Card.Text>
                    <FaVoteYea />
                    <Card.Text className="m-0">6.2ר</Card.Text>
                    <TbUsersGroup />
                    <Card.Text className="m-0">1ר</Card.Text>
                    <FaEye />
                    <Card.Text className="m-0">62.6ר</Card.Text>
                  </div>
                </Card>

                <Card>
                  <a href="/">
                    <Card.Img variant="top" src={testnature} />
                    <Card.Body>
                      <Card.Title>האם יש לאסור ניסויים בבעלי חיים?</Card.Title>
                      {/* <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text> */}
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </a>
                  <hr />
                  <div className="color-text-icon d-flex align-items-center justify-content-evenly m-0">
                    <TbMessage2 />
                    <Card.Text className="m-0">749</Card.Text>
                    <FaPen />
                    <Card.Text className="m-0">10.9ר</Card.Text>
                    <FaVoteYea />
                    <Card.Text className="m-0">6.2ר</Card.Text>
                    <TbUsersGroup />
                    <Card.Text className="m-0">1ר</Card.Text>
                    <FaEye />
                    <Card.Text className="m-0">62.6ר</Card.Text>
                  </div>
                </Card>

                <Card>
                  <a href="/">
                    <Card.Img variant="top" src={testedu} />
                    <Card.Body>
                      <Card.Title>האם יש לאסור ניסויים בבעלי חיים?</Card.Title>
                      {/* <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text> */}
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </a>
                  <hr />
                  <div className="color-text-icon d-flex align-items-center justify-content-evenly m-0">
                    <TbMessage2 />
                    <Card.Text className="m-0">749</Card.Text>
                    <FaPen />
                    <Card.Text className="m-0">10.9ר</Card.Text>
                    <FaVoteYea />
                    <Card.Text className="m-0">6.2ר</Card.Text>
                    <TbUsersGroup />
                    <Card.Text className="m-0">1ר</Card.Text>
                    <FaEye />
                    <Card.Text className="m-0">62.6ר</Card.Text>
                  </div>
                </Card>

                <Card>
                  <a href="/">
                    <Card.Img variant="top" src={testcode} />
                    <Card.Body>
                      <Card.Title>האם יש לאסור ניסויים בבעלי חיים?</Card.Title>
                      {/* <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text> */}
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </a>
                  <hr />
                  <div className="color-text-icon d-flex align-items-center justify-content-evenly m-0">
                    <TbMessage2 />
                    <Card.Text className="m-0">749</Card.Text>
                    <FaPen />
                    <Card.Text className="m-0">10.9ר</Card.Text>
                    <FaVoteYea />
                    <Card.Text className="m-0">6.2ר</Card.Text>
                    <TbUsersGroup />
                    <Card.Text className="m-0">1ר</Card.Text>
                    <FaEye />
                    <Card.Text className="m-0">62.6ר</Card.Text>
                  </div>
                </Card>

                <Card>
                  <a href="/">
                    <Card.Img variant="top" src={testDog} />
                    <Card.Body>
                      <Card.Title>האם יש לאסור ניסויים בבעלי חיים?</Card.Title>
                      {/* <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text> */}
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </a>
                  <hr />
                  <div className="color-text-icon d-flex align-items-center justify-content-evenly m-0">
                    <TbMessage2 />
                    <Card.Text className="m-0">749</Card.Text>
                    <FaPen />
                    <Card.Text className="m-0">10.9ר</Card.Text>
                    <FaVoteYea />
                    <Card.Text className="m-0">6.2ר</Card.Text>
                    <TbUsersGroup />
                    <Card.Text className="m-0">1ר</Card.Text>
                    <FaEye />
                    <Card.Text className="m-0">62.6ר</Card.Text>
                  </div>
                </Card>

                <Card>
                  <a href="/">
                    <Card.Img variant="top" src={testrobot} />
                    <Card.Body>
                      <Card.Title>האם יש לאסור ניסויים בבעלי חיים?</Card.Title>
                      {/* <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text> */}
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </a>
                  <hr />
                  <div className="color-text-icon d-flex align-items-center justify-content-evenly m-0">
                    <TbMessage2 />
                    <Card.Text className="m-0">749</Card.Text>
                    <FaPen />
                    <Card.Text className="m-0">10.9ר</Card.Text>
                    <FaVoteYea />
                    <Card.Text className="m-0">6.2ר</Card.Text>
                    <TbUsersGroup />
                    <Card.Text className="m-0">1ר</Card.Text>
                    <FaEye />
                    <Card.Text className="m-0">62.6ר</Card.Text>
                  </div>
                </Card>
              </div>
            </Row>

            <Row className="more-discussion-btn d-flex justify-content-center">
              <Button variant="light">More Discussions</Button>{" "}
            </Row>
          </Container>
        </section>

        <section className="claims-cards">
          <Container>
            <Row>
              <Col className="searchbar_claims_header">
                <h2>Claims(results counts)</h2>
              </Col>
            </Row>
            <Row className="cards-row">
              <div className="mt-top">
                <Card>
                  <a href="/">
                    <Card.Body>
                      <Col className="text-above">
                        <p>dcjsdbjdbjhbdhvbhdjvbjd</p>
                      </Col>
                      <div className="img-left">
                        <Col>
                          <Card.Img variant="top" src={testGpt} />
                        </Col>
                        <Col className="d-flex">
                          <Card.Title className="d-flex align-items-center">
                            האם יש לאסור ניסויים בבעלי חיים?
                          </Card.Title>
                        </Col>
                      </div>
                    </Card.Body>
                  </a>
                </Card>

                <Card>
                  <a href="/">
                    <Card.Body>
                      <Col className="text-above">
                        <p>dcjsdbjdbjhbdhvbhdjvbjd</p>
                      </Col>
                      <div className="img-left">
                        <Col>
                          <Card.Img variant="top" src={testGpt} />
                        </Col>
                        <Col className="d-flex">
                          <Card.Title className="d-flex align-items-center">
                            האם יש לאסור ניסויים בבעלי חיים?
                          </Card.Title>
                        </Col>
                      </div>
                    </Card.Body>
                  </a>
                </Card>

                <Card>
                  <a href="/">
                    <Card.Body>
                      <Col className="text-above">
                        <p>dcjsdbjdbjhbdhvbhdjvbjd</p>
                      </Col>
                      <div className="img-left">
                        <Col>
                          <Card.Img variant="top" src={testGpt} />
                        </Col>
                        <Col className="d-flex">
                          <Card.Title className="d-flex align-items-center">
                            האם יש לאסור ניסויים בבעלי חיים?
                          </Card.Title>
                        </Col>
                      </div>
                    </Card.Body>
                  </a>
                </Card>

                <Card>
                  <a href="/">
                    <Card.Body>
                      <Col className="text-above">
                        <p>dcjsdbjdbjhbdhvbhdjvbjd</p>
                      </Col>
                      <div className="img-left">
                        <Col>
                          <Card.Img variant="top" src={testGpt} />
                        </Col>
                        <Col className="d-flex">
                          <Card.Title className="d-flex align-items-center">
                            האם יש לאסור ניסויים בבעלי חיים?
                          </Card.Title>
                        </Col>
                      </div>
                    </Card.Body>
                  </a>
                </Card>

                <Card>
                  <a href="/">
                    <Card.Body>
                      <Col className="text-above">
                        <p>dcjsdbjdbjhbdhvbhdjvbjd</p>
                      </Col>
                      <div className="img-left">
                        <Col>
                          <Card.Img variant="top" src={testGpt} />
                        </Col>
                        <Col className="d-flex">
                          <Card.Title className="d-flex align-items-center">
                            האם יש לאסור ניסויים בבעלי חיים?
                          </Card.Title>
                        </Col>
                      </div>
                    </Card.Body>
                  </a>
                </Card>

                <Card>
                  <a href="/">
                    <Card.Body>
                      <Col className="text-above">
                        <p>dcjsdbjdbjhbdhvbhdjvbjd</p>
                      </Col>
                      <div className="img-left">
                        <Col>
                          <Card.Img variant="top" src={testGpt} />
                        </Col>
                        <Col className="d-flex">
                          <Card.Title className="d-flex align-items-center">
                            האם יש לאסור ניסויים בבעלי חיים?
                          </Card.Title>
                        </Col>
                      </div>
                    </Card.Body>
                  </a>
                </Card>
              </div>
            </Row>
            <Row className="more-claims-btn d-flex justify-content-center">
              <Button variant="light">More Claims</Button>{" "}
            </Row>
          </Container>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Search;
