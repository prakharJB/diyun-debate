import Header from "../../../Layouts/Header";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { TbMessage2, TbUsersGroup } from "react-icons/tb";
import { FaEye, FaPen, FaVoteYea } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import toast from "react-hot-toast";
import tHn from "../../../locales/he.json";

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

  //Add comment
  const [comments, setComments] = useState([]);
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);

  const addItem = async () => {
    try {
      if (!inputData) {
        // Handle the case where inputData is empty
      } else {
        const result = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/api/debates/${debateDetails.id}/addComments`,
          { comment: inputData }, // Pass the comment data here
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setItems([...items, inputData]);
        setInputData('');
        console.log(result);
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };


  const fetchData = async () => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}/api/getdebatebyid/${id}/displaydebate`;
      const responseData = await axios.get(url);
      setDebateDetails(responseData?.data?.debate);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchDataById = async (newId) => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}/api/getdebatebyid/${newId}/displaydebate`;
      const responseData = await axios.get(url);
      setDebateDetails(responseData?.data?.debate);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataById(id);
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
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/debates/${debateDetails.id}/addConsChildDebate`,
        cons,
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
    setShowConsForm(false);
    setCons({ title: "" });
  };

  const baseUrl = `${process.env.REACT_APP_BASE_URL}/storage/app/public/`;
  const [oldTitle, setOldTitle] = useState("");
  const [oldDebateId, setOldDebateId] = useState("");

  const handleDivClick = async (id, isPro) => {
    const clickedDiv = isPro
      ? debateDetails.pros.find((pro) => pro.id === id)
      : debateDetails.cons.find((con) => con.id === id);

    setOldTitle(debateDetails.title);
    setOldDebateId(debateDetails.id);
    const updatedTitle = clickedDiv.title;
    debateDetails.title = updatedTitle;

    fetchDataById(id);
    setDebateDetails({ ...debateDetails });
  };

  const revertToOldTitle = async () => {
    debateDetails.title = oldTitle;
    setOldTitle("");
    await fetchDataById(oldDebateId);
  };

  const [showProsForm, setShowProsForm] = useState(false);
  const [showConsForm, setShowConsForm] = useState(false);

  const toggleProsForm = () => {
    setShowProsForm(!showProsForm);
    setShowConsForm(false);
  };

  const toggleConsForm = () => {
    setShowConsForm(!showConsForm);
    setShowProsForm(false);
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

        <Card closeButton>
          <Card.Img
            variant="top"
            src={baseUrl + debateDetails?.image}
            height={300}
          />
          <Card.Body>
            <Card.Title>{debateDetails?.title}</Card.Title>
            <Card.Text>
              <Card.Title>{tHn.Background_Info}</Card.Title>
              {debateDetails?.backgroundinfo}
            </Card.Text>
          </Card.Body>

          <hr />
          <div className="color-text-icon test d-flex align-items-center justify-content-evenly m-0">
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
        <Button onClick={handleClose}>Enter</Button>
      </Modal>
      <Header />

      <section
        style={{ background: "#F2F4F5", paddingBottom: "calc(100vh - 250px)" }}
        className="h-100"
        dir="rtl"
      >
        <Container>
          <Row>
            <Col md={10} className="m-auto mt-4 test">
              <div className="p-4 my-4  ">

                <div
                  style={{ background: "#ffff" }}
                  className="p-4 rounded w-50 m-auto d-flex justify-content-between"
                  onClick={() => revertToOldTitle()}
                >
                  <p>{oldTitle}</p>
                  {/* --------------comment box------------ */}
                  <div className="comments-container">
                    <div className="comments" ><i class="fa-solid fa-message ms-2"></i><span></span></div>
                  </div>
                </div>
                <div className="detail-comment" >
                  <div className="comment-panel position-relative" >
                    <div className="comment-list w-50 mx-auto">
                      <Container>
                        {comments.map((comment, index) => (
                          <Card key={index} style={{ width: '23rem' }}>
                            <Card.Body>
                              <Card.Title>{comment}</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                              <Card.Text>
                                {comment.comment}
                              </Card.Text>
                              <Card.Link href="#" className="text-secondary" >Hide<i class="fa fa-eye-slash text-secondary px-1" aria-hidden="true"></i></Card.Link>
                              <p className="text-secondary d-inline-block px-2">Edit<i class="fa fa-pencil text-secondary px-1" aria-hidden="true"></i></p>
                              {/* <Card.Link href="#" className="text-secondary d-inline-block px-2" onClick={()=> editItem(comment.id)} >Edit<i class="fa fa-pencil text-secondary px-1" aria-hidden="true"></i></Card.Link> */}

                            </Card.Body>
                          </Card>
                        ))}
                      </Container>
                    </div>

                    <div className="message-card" >
                      <input
                        className="form-control"
                        id="textAreaExample"
                        placeholder="Suggest improvement"
                        rows="4"
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)}
                      />
                    </div>
                    <div className="btn-add-cment position-absolute start-10" >
                      <i class="fa fa-plus add-btn" aria-hidden="true" onClick={addItem}></i>
                      {/* <i class="fa fa-pencil add-btn" aria-hidden="true" ></i> */}
                    </div>
                  </div>
                </div>
                {/* --------------comment box------------ */}
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
                      className="text-success  p-2 border rounded"
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
