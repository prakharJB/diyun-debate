import Header from "../../../Layouts/Header";
import { Container, Row, Col, Accordion, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Sunburst from "sunburst-chart";
import Modal from "react-bootstrap/Modal";
import { TbMessage2, TbUsersGroup } from "react-icons/tb";
import { FaEye, FaPen, FaVoteYea } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import * as d3 from "d3";

function SingleDebate() {
  const [detailDebateModal, setDetailDebateModal] = useState(false);
  const myChart = Sunburst();
  const [pros, setPros] = useState({
    title: "",
  });
  const [cons, setCons] = useState({
    title: "",
  });
  const { id } = useParams();
  const [debateDetails, setDebateDetails] = useState();

  const fetchData = async () => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}/api/getdebatebyid/${id}/displaydebate`;
      const responseData = await axios.get(url);
      console.log("API Response:", responseData?.data?.debate);
      setDebateDetails(responseData?.data?.debate);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    modalShow();
  }, []);
  const handleClose = () => setDetailDebateModal(false);
  const modalShow = () => {
    setDetailDebateModal(true);
  };
  const handleProsChange = (e) => {
    setPros({ ...pros, [e.target.name]: e.target.value });
  };
  const handleConsChange = (e) => {
    setCons({ ...cons, [e.target.name]: e.target.value });
  };
  const handleSubmitPros = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", pros);
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/debates/${id}/addProsChildDebate`,
        pros,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(result);
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };
  const handleSubmitCons = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", cons);
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/debates/${id}/addConsChildDebate`,
        cons,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Adjust the content type for file uploads
          },
        }
      );
      console.log(result);
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };
  const baseUrl = `${process.env.REACT_APP_BASE_URL}/storage/app/public/`;

  // Sunburst

  const svgRef = useRef();
  useEffect(() => {
    if (debateDetails && svgRef.current) {
      drawChart();
    }
  }, [debateDetails]);
  const drawChart = () => {
    // Your D3.js code to draw the sunburst chart goes here
    const width = 500;
    const height = 500;

    // Create a D3.js hierarchy from the nested JSON data
    const root = d3.hierarchy(debateDetails);

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    // Your sunburst chart code using D3.js hierarchy layout goes here
  };
  return (
    <>
      <Modal
        show={detailDebateModal}
        size="lg"
        onHide={handleClose}
        centered
        dir="rtl"
      >
        {/* <Modal.Header closeButton></Modal.Header> */}
        {/* <Modal.Body> */}
        <Card closeButton>
          <Card.Img
            variant="top"
            src={baseUrl + debateDetails?.image}
            height={300}
          />
          <Card.Body>
            <Card.Title>{debateDetails?.title}</Card.Title>
            <Card.Text>
              <Card.Title>Background Info</Card.Title>
              {debateDetails?.backgroundinfo}
            </Card.Text>
          </Card.Body>

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
        {/* </Modal.Body> */}
        <Button onClick={handleClose}>Enter</Button>
      </Modal>
      {/* <Header /> */}
      <section style={{ background: "#F2F4F5" }} dir="rtl">
        <Container>
          <Row>
            <Col md={8} className="m-auto mt-4">
              <div></div>
              <Accordion>
                <Accordion.Item eventKey="0" dir="rtl">
                  <Accordion.Header>{debateDetails?.title}</Accordion.Header>
                  <Accordion.Body></Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <div className="d-flex w-100">
                <div className="w-50">
                  <Accordion>
                    <Accordion.Item eventKey="0" dir="rtl">
                      <Accordion.Header>Pros</Accordion.Header>
                      <Accordion.Body>
                        <Form onSubmit={handleSubmitPros}>
                          <Form.Group controlId="formName">
                            {/* <Form.Label className="mt-4">Name</Form.Label> */}
                            <Form.Control
                              type="text"
                              placeholder="Suggest your pros here. It will become visible to all viewer once the discussion admins have accepted it."
                              name="title"
                              value={pros.title}
                              onChange={handleProsChange}
                            />
                          </Form.Group>

                          <Button
                            className="my-4"
                            variant="success"
                            type="submit"
                            style={{ fontWeight: "700" }}
                          >
                            Pros
                          </Button>
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className="w-50">
                  <Accordion>
                    <Accordion.Item eventKey="0" dir="rtl">
                      <Accordion.Header>Cons</Accordion.Header>
                      <Accordion.Body className="danger">
                        <Form onSubmit={handleSubmitCons}>
                          <Form.Group controlId="formName">
                            {/* <Form.Label className="mt-4">Name</Form.Label> */}
                            <Form.Control
                              type="text"
                              placeholder="Enter your name"
                              name="title"
                              value={cons.title}
                              onChange={handleConsChange}
                            />
                          </Form.Group>

                          <Button
                            className="my-4"
                            variant="danger"
                            type="submit"
                            style={{ fontWeight: "700" }}
                          >
                            Cons
                          </Button>
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
              <div className="d-flex w-100">
                <div className="w-50">
                  {debateDetails?.pros &&
                    debateDetails?.pros.map((val, index) => (
                      <div
                        style={{ background: "#Fff" }}
                        className="border p-4 ml-1"
                        key={val.id}
                      >
                        {val?.title}
                      </div>
                    ))}
                </div>
                <div className="w-50">
                  {debateDetails?.cons &&
                    debateDetails?.cons.map((val, index) => (
                      <div
                        style={{ background: "#fff" }}
                        className="border p-4 mr-1"
                        key={val.id}
                      >
                        {val?.title}
                      </div>
                    ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default SingleDebate;
