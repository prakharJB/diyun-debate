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

// import Sunburst from 'react-sunburst';
import { Sunburst } from "react-vis";
import toast from "react-hot-toast";
import tHn from "../../../locales/he.json";
import DebateTree from "../../../Component/UserComponent/DebateTree";


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
  const [commentText, setCommentText] = useState("");
  const [totalComments, setTotalComments] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentListVisible, setCommentListVisible] = useState(true); //visible comment
  const [toggleSubmit, setToggleSubmit] = useState(true); //edit comment toggle
  const [isEditItem, setIsEditItem] = useState(null); //edit comment

  const handleToggleCommentList = () => {
    setCommentListVisible(!commentListVisible);
  };

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  //edit comment
  const editItem = async (id) => {
    let newEditItem = comments.find((comment) => {
      return comment.id ===id
    });
    console.log(newEditItem);
    setToggleSubmit(false); //change submit button
    setCommentText(newEditItem.comment); //new update value
    setIsEditItem(id); //pass current element id
      }

  //handle the "Add Comment" 
  const handleAddComment = async () => {
    
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/debates/${debateDetails.id}/addComments`,
        { comment: commentText },
        {
          headers: {            
            "Content-Type": "application/json",
          },
        }
      )
      if (result?.data?.debate) {
        setDebateDetails(result.data.debate);
        fetchCommentsList();
      } //--------------------------------------------
      // if (commentText && !toggleSubmit ){
      //   setComments(
      //     comments.map((comment) =>{
      //       if(comment.id === isEditItem){
      //       return{...comment, comment: commentText};
      //       } return comment;
      //     })
      //   )
      // }--------------------------------------------
      console.log(result);
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
    // Clear the comment input after submission
    setCommentText("");
  };



  const fetchCommentsList = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/debates/${debateDetails.id}/commentsList`
      );
      console.log("Comments API Response:", response);
      if (response?.data?.comments) {
        setComments(response.data.comments);
        setTotalComments(response.data.comments.length);
        console.log("Updated Comments State:", response.data.comments);
      }
    } catch (error) {
      console.error("Error fetching comments list:", error.message);
    }
  };
  console.log("Comments State:", comments);

  //delete comment
  const deleteItem =(id) =>{
    console.log(id);
    const updatedItems = commentText.filter((comment, ind) =>{
return ind 
    }
    )
  }

  

  // display single debate

  const fetchData = async () => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}/api/getdebatebyid/${id}/displaydebate`;
      const responseData = await axios.get(url);
      console.log("API Response:", responseData?.data?.debate);
      setDebateDetails(responseData?.data?.debate);
      setTotalComments(responseData?.data?.debate?.comments?.length || 0);
      // Update comments state with user information
      const updatedComments = responseData?.data?.debate?.comments?.map((comment) => ({
        ...comment,
        user: comment?.user || {},  // Replace with actual timestamp logic
      }));
      setComments(updatedComments || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // display single debate
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

  // ------Comment----- 
  useEffect(() => {
    fetchDataById(id);
  }, [id]);
  useEffect(() => {
    if (debateDetails) {
      fetchCommentsList(); // Fetch comments when debateDetails is available
    }
  }, [debateDetails]); // ------Comment ---- 

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

  // Submit Pros
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

  // Submit Cons

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
    }
    catch (error) {
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
      </div>*/}

      <DebateTree />

      <section
        style={{ background: "#F2F4F5", paddingBottom: "calc(100vh - 250px)" }}
        className="h-100"
        dir="rtl"
      >
        <Container>
          <Row>
            <Col md={10} className="m-auto mt-4">
              <div className="p-4 my-4  ">
                <div
                  style={{ background: "#ffff" }}
                  className="p-4 rounded w-100 m-auto d-flex justify-content-between"
                  onClick={() => revertToOldTitle()}
                >
                  {oldTitle}
                  {/* --------------comment box------------ */}
                  <div className="comments-container">
                    <div className="comments" onClick={handleToggleCommentList} ><i class="fa-solid fa-message ms-2"></i><span>{totalComments}</span></div>
                  </div>
                </div>
                <div className="detail-comment" style={{ display: commentListVisible ? 'block' : 'none' }} >
                  <div className="comment-panel position-relative" >
                    <div className="comment-list w-50 mx-auto">
                      <Container>
                        {comments.map((comment) => (
                          <Card key={comment.id} style={{ width: '23rem' }}>
                            <Card.Body>
                              <Card.Title>{comment.user.name}</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">{comment.timestamp}</Card.Subtitle>
                              <Card.Text>
  {comments.map((comment, ind) => (
    <div className="eachItem" key={ind}>
      <Card.Link href="#" className="text-secondary" onClick={() => deleteItem(comment.id)}>
        Hide<i className="fa fa-eye-slash text-secondary px-1" aria-hidden="true"></i>
      </Card.Link>
    </div>
  ))}
</Card.Text>
                              {/* <Card.Link href="#" className="text-secondary" onClick={()=> deleteItem(comment.id)}>Hide<i class="fa fa-eye-slash text-secondary px-1" aria-hidden="true"></i></Card.Link> */}
                              <p className="text-secondary d-inline-block px-2"onClick={()=> editItem(comment.id)}>Edit<i class="fa fa-pencil text-secondary px-1" aria-hidden="true"></i></p>
                              {/* <Card.Link href="#" className="text-secondary d-inline-block px-2" onClick={()=> editItem(comment.id)} >Edit<i class="fa fa-pencil text-secondary px-1" aria-hidden="true"></i></Card.Link> */}

                            </Card.Body>
                          </Card>
                        ))}
                      </Container>
                    </div>
                    <div>
                      <div className="message-card" >
                        <input
                          className="form-control"
                          id="textAreaExample"
                          placeholder="Suggest improvement"
                          rows="4"
                          value={commentText}
                          onChange={handleCommentChange}
                        />
                      </div>
                      <div className="btn-add-cment position-absolute start-10" >
                        {
                          toggleSubmit ? <i class="fa fa-plus add-btn" aria-hidden="true"onClick={handleAddComment}></i> : <i class="fa fa-pencil add-btn" aria-hidden="true"onClick={handleAddComment}></i>
                        }
                        
                      </div>
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
      </section >
    </>
  );
}

export default SingleDebate;
