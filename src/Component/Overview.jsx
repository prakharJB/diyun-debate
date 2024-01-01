import React, { useEffect } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import testrobot from "../Assets/test-robot.jpeg";
import { FaEye, FaPen, FaVoteYea } from "react-icons/fa";
import { TbMessage2, TbUsersGroup } from "react-icons/tb";
import testGpt from "../Assets/test-chatgpt.jpeg";
import { useContext } from "react";
import { MyContext } from "./SunBurst";
import axios from "axios";

const Overview = () => {
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

  useEffect(() => {
    fetchData();
  }, []);

  const baseUrl = `${process.env.REACT_APP_BASE_URL}/storage/app/public/`;
  return (
    <section>
      <Container>
        <Row>
          <Col className="welcome-content col-md-8">
            <div className="my-5 mt-0 py-5 pt-0">
              <h2>Welcome to Diyun</h2>
              <p>Hi, username! </p>
              <p>
                This is My Diyun, where you’ll find all your discussions and
                teams.
              </p>
              <p>
                Ready to get started? <a href="/explore">Explore</a> discussions
                or <a href="/explore">create</a> one yourself.
              </p>
            </div>

            <div>
              <h3 className="my-4">Recommended for you</h3>
              <div className="d-flex">
                <div className="cardd-div">
                  <Card className="">
                    <a href={`/debate/${text[1]?.id}`}>
                      <Card.Img variant="top" src={testGpt} />
                      <Card.Body>
                        <Card.Title>{text[1]?.title}</Card.Title>
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
                <div>
                  <Card className="cardd-div">
                    <a href={`/debate/${text[2]?.id}`}>
                      <Card.Img variant="top" src={testGpt} />
                      <Card.Body>
                        <Card.Title>{text[2]?.title}</Card.Title>
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
              </div>
              <div>
                <h4 className="see-all text-align-end text-decoration-underline">
                  See All
                </h4>
              </div>
            </div>
          </Col>

          <Col className="recntly-viewed-col">
            <div>
              <div className="border-bottom  my-5 mt-0">
                <h3 className="my-4 mt-0">Recently viewed</h3>
              </div>
              <div>
                <div>
                  <ul>
                    <li>
                      <div className="d-flex mt-4 reviewed-card-box">
                        <div className="recentlyviewed-cardimage">
                          <img
                            src={testrobot}
                            alt="Robot"
                            className="img-fluid"
                          />
                        </div>
                        <div className="d-flex align-items-center discussion-card-title__title--compact-line">
                          <p>
                            Will robots doing work be better or worse for humans
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <div className="d-flex mt-4 reviewed-card-box">
                        <div className="recentlyviewed-cardimage">
                          <img
                            src={testrobot}
                            alt="Robot"
                            className="img-fluid"
                          />
                        </div>
                        <div className="d-flex align-items-center discussion-card-title__title--compact-line">
                          <p>
                            Will robots doing work be better or worse for humans
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="see-all text-align-end text-decoration-underline">
                  See All
                </h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Overview;
