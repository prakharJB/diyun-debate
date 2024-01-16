import Header from "../../../Layouts/Header";
import { Container, Row, Col, Accordion, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
// import Sunburst from "sunburst-chart";
import Modal from "react-bootstrap/Modal";
import { TbMessage2, TbUsersGroup } from "react-icons/tb";
import { FaEye, FaPen, FaVoteYea } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import { Tree as D3Tree } from "react-d3-tree";
// import Sunburst from 'react-sunburst';
import { Sunburst } from "react-vis";
import toast from "react-hot-toast";

function SingleDebate() {
  const [textProsCount, setTextProsCount] = useState(0);
  const [textConsCount, setTextConsCount] = useState(0);
  const [detailDebateModal, setDetailDebateModal] = useState(false);
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
  const fetchDataById = async (newId) => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}/api/getdebatebyid/${newId}/displaydebate`;
      const responseData = await axios.get(url);
      console.log("API Response:", responseData?.data?.debate);
      setDebateDetails(responseData?.data?.debate);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataById(id); // Initial fetch using ID
  }, [id]);

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    modalShow();
  }, []);
  const handleClose = () => setDetailDebateModal(false);
  const modalShow = () => {
    setDetailDebateModal(true);
  };
  const handleProsChange = (e) => {
    setPros({ ...pros, [e.target.name]: e.target.value });
    setTextProsCount(e.target.value.length);
  };
  const handleConsChange = (e) => {
    setCons({ ...cons, [e.target.name]: e.target.value });
    setTextConsCount(e.target.value.length);
  };
  const handleSubmitPros = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", pros);
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/debates/${debateDetails.id}/addProsChildDebate`,
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
      if (error?.response?.data?.status == 401) {
        toast.error("please login for debate");
      } else {
        toast.error("Something wrong please try some time letter");
      }
    }
    fetchDataById(debateDetails.id);
    setShowProsForm(false);
    setPros({ title: "" });
  };
  const handleSubmitCons = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", cons);
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/debates/${debateDetails.id}/addConsChildDebate`,
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
      if (error?.response?.data?.status == 401) {
        toast.error("please login for debate");
      } else {
        toast.error("Something wrong please try some time letter");
      }
    }
    fetchDataById(debateDetails.id);
    setShowConsForm(false);
    setCons({ title: "" });
  };
  const baseUrl = `${process.env.REACT_APP_BASE_URL}/storage/app/public/`;
  const [oldTitle, setOldTitle] = useState("");
  const [oldDebateId, setOldDebateId] = useState("");
  // const [oldDebate, setOldDebate] = useState(null);
  const handleDivClick = async (id, isPro) => {
    // Find the clicked div in the state
    const clickedDiv = isPro
      ? debateDetails.pros.find((pro) => pro.id === id)
      : debateDetails.cons.find((con) => con.id === id);

    setOldTitle(debateDetails.title);
    setOldDebateId(debateDetails.id);
    const updatedTitle = clickedDiv.title;
    debateDetails.title = updatedTitle;
    // setOldDebate({ ...debateDetails });

    fetchDataById(id);
    setDebateDetails({ ...debateDetails });
  };
  const revertToOldTitle = async () => {
    debateDetails.title = oldTitle;
    setOldTitle("");
    await fetchDataById(oldDebateId);
    // setDebateDetails({ ...debateDetails });
    // if (oldDebate) {
    //   setDebateDetails({ ...oldDebate });
    //   setOldDebate(null);
    // }
  };
  const [showProsForm, setShowProsForm] = useState(false);
  const [showConsForm, setShowConsForm] = useState(false);
  const toggleProsForm = () => {
    setShowProsForm(!showProsForm);
    setShowConsForm(false); // Hide Cons form when showing Pros form
  };

  const toggleConsForm = () => {
    setShowConsForm(!showConsForm);
    setShowProsForm(false); // Hide Pros form when showing Cons form
  };

  // tree

  // const [treeData, setTreeData] = useState({});

  // const fetchtreeData = async (id) => {
  //   try {
  //     const url = `${process.env.REACT_APP_BASE_URL}/api/getdebatebyid/${id}/displaydebate`;
  //     const responseData = await axios.get(url);
  //     const debateDetails = responseData?.data?.debate;

  //     const treeItem = {
  //       name: debateDetails.title,
  //       attributes: {
  //         backgroundInfo: debateDetails.backgroundinfo,
  //         totalVotes: debateDetails.total_votes,
  //         side: debateDetails.side,
  //       },
  //       children: [],
  //     };

  //     if (debateDetails.pros && debateDetails.pros.length > 0) {
  //       debateDetails.pros.forEach((pro) => {
  //         treeItem.children.push({
  //           name: pro.title,
  //           attributes: {
  //             backgroundInfo: pro.backgroundinfo,
  //             totalVotes: pro.total_votes,
  //             side: pro.side,
  //           },
  //           children: fetchData(pro.id),
  //         });
  //       });
  //     }

  //     if (debateDetails.cons && debateDetails.cons.length > 0) {
  //       debateDetails.cons.forEach((con) => {
  //         treeItem.children.push({
  //           name: con.title,
  //           attributes: {
  //             backgroundInfo: con.backgroundinfo,
  //             totalVotes: con.total_votes,
  //             side: con.side,
  //           },
  //           children: fetchData(con.id),
  //         });
  //       });
  //     }

  //     return [treeItem];
  //   } catch (error) {
  //     console.error("Error fetching tree data:", error);
  //     return [];
  //   }
  // };

  // useEffect(() => {
  //   const parentId = id; // Replace with the actual parent_id
  //   fetchtreeData(parentId).then((treeData) => {
  //     setTreeData({ name: "Root", attributes: {}, children: treeData });
  //   });
  // }, []);

  // sunburst

  // const [sunburstDebateData, setSunburstDebateData] = useState()
  // const [sunburstData, setSunburstData] = useState({
  //   name: "Root",
  //   children: [],
  // });

  // const fetchSunData = async (id) => {
  //   try {
  //     const url = `${process.env.REACT_APP_BASE_URL}/api/getdebatebyid/${id}/displaydebate`;
  //     const responseData = await axios.get(url);
  //     const sunburstDebateData = responseData?.data?.debate;

  //     const sunburstItem = {
  //       name: sunburstDebateData.title,
  //       children: [],
  //     };

  //     if (sunburstDebateData.pros && sunburstDebateData.pros.length > 0) {
  //       debateDetails.pros.forEach((pro) => {
  //         sunburstItem.children.push({
  //           name: pro.title,
  //           children: fetchSunData(pro.id),
  //         });
  //       });
  //     }

  //     if (debateDetails.cons && debateDetails.cons.length > 0) {
  //       debateDetails.cons.forEach((con) => {
  //         sunburstItem.children.push({
  //           name: con.title,
  //           children: fetchSunData(con.id),
  //         });
  //       });
  //     }

  //     return [sunburstItem];
  //   } catch (error) {
  //     console.error("Error fetching sunburst data:", error);
  //     return [];
  //   }
  // };

  // useEffect(() => {
  //   const parentId = 25; // Replace with the actual parent_id
  //   fetchSunData(parentId).then((sunburstData) => {
  //     setSunburstData({ name: "Root", children: sunburstData });
  //   });
  // }, []);
  // useEffect(() => {
  //   const parentId = id; // Replace with the actual parent_id
  //   fetchSunData(parentId).then((sunburstData) => {
  //     setSunburstData({ name: "Root", children: sunburstData });
  //   });
  // }, []);

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
      <Header />
      {/* <div style={{ width: "100%", height: "500px" }}>
        <Sunburst
          data={sunburstData}
          width={500}
          height={500}
          // tooltipContent={(node) => `${node.name}: ${node.size || 0}`}
        />
      </div>
      <div style={{ width: "100%", height: "500px" }}>
        <D3Tree
          data={treeData}
          orientation="vertical"
          translate={{ x: 100, y: 100 }}
          collapsible={true}
        />
      </div> */}
      <section
        style={{ background: "#F2F4F5", paddingBottom: "calc(100vh - 250px)" }}
        className="h-100"
        dir="rtl"
      >
        <Container>
          <Row>
            <Col md={10} className="m-auto mt-4">
              <div className="p-4 my-4  ">
                {/* {oldTitle === "" ? ( */}
                <div
                  style={{ background: "#ffff" }}
                  className="p-4 rounded w-50 m-auto"
                  onClick={() => revertToOldTitle()}
                >
                  {oldTitle}
                </div>
                {/* ) : null} */}

                <div
                  style={{ background: "#ffff" }}
                  className="p-4 mt-1 rounded"
                >
                  {debateDetails?.title}
                </div>
                <div className="d-flex">
                  <div className="w-50">
                    <div
                      style={{ background: "#ffff" }}
                      className="text-success p-2 border rounded"
                    >
                      Pros
                      <Button onClick={toggleProsForm} className="btn-success">
                        +
                      </Button>
                    </div>
                    {showProsForm && (
                      <div
                        style={{ background: "#ffff" }}
                        className="p-2 border rounded"
                      >
                        <Form onSubmit={handleSubmitPros}>
                          <Form.Group controlId="formName">
                            <Form.Control
                              type="text"
                              placeholder="Suggest your pros here."
                              name="title"
                              value={pros.title}
                              maxLength="500"
                              autoFocus
                              onChange={handleProsChange}
                            />
                            {textProsCount}/500
                          </Form.Group>

                          <Button
                            className="my-2"
                            variant="success"
                            type="submit"
                            style={{ fontWeight: "700" }}
                          >
                            Pros
                          </Button>
                        </Form>
                      </div>
                    )}
                  </div>
                  <div className="w-50">
                    <div
                      style={{ background: "#ffff" }}
                      className="text-danger p-2 border rounded"
                    >
                      Cons
                      <Button onClick={toggleConsForm} className="btn-danger">
                        +
                      </Button>
                    </div>
                    {showConsForm && (
                      <div
                        style={{ background: "#ffff" }}
                        className="p-2 border rounded"
                      >
                        <Form onSubmit={handleSubmitCons}>
                          <Form.Group controlId="formName">
                            <Form.Control
                              type="text"
                              placeholder="Suggest your cons here."
                              name="title"
                              value={cons.title}
                              autoFocus
                              maxLength="500"
                              onChange={handleConsChange}
                            />
                            {textConsCount}/500
                          </Form.Group>
                          <Button
                            className="my-2"
                            variant="danger"
                            type="submit"
                            style={{ fontWeight: "700" }}
                          >
                            Cons
                          </Button>
                        </Form>
                      </div>
                    )}
                  </div>
                </div>
                <div className="d-flex w-100">
                  <div className="w-50 p-2 mt-1 rounded">
                    {debateDetails?.pros &&
                      debateDetails?.pros.map((val, index) => (
                        <div
                          key={val.id}
                          style={{ background: "#ffff" }}
                          className="p-2 mt-1 rounded"
                          onClick={() => handleDivClick(val.id, true)}
                        >
                          {val?.title}
                        </div>
                      ))}
                  </div>
                  <div className="w-50 p-2 mt-1 rounded">
                    {debateDetails?.cons &&
                      debateDetails?.cons.map((val, index) => (
                        <div
                          key={val.id}
                          style={{ background: "#ffff" }}
                          onClick={() => handleDivClick(val.id, false)}
                          className="p-2 mt-1 rounded"
                        >
                          {val?.title}
                        </div>
                      ))}
                  </div>
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
