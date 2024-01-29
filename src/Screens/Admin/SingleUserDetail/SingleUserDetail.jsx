import { } from "react-bootstrap";
import { Container, Col, Row, Card, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


//All User - SubPage
function SingleUserDetail() {
    const [usersDetails, setUsersDetails] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://laradebate.jmbliss.com/api/getdebatebyid/${id}/displaydebate`);
                setUsersDetails(response?.data?.debate);
                console.log(response?.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [id]);

    return (
        <>
            <section className="user-inford" >
                <Container>
                    <Row>
                        <div className="" >
                            <h2>User Profile Dashboard</h2>
                            <div className="user-detail-prof" >
                                <Card.Img variant="top" className="user-detail-img" src="/static/media/test-robot.7e03e1ea3d0cfce364c2.jpeg" />
                                <div className="column-profile d-flex " >
                                    <Col className="column1-profile">
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>id : <span> {usersDetails?.id}</span></ListGroup.Item>
                                            <ListGroup.Item>user id : <span> {usersDetails?.user_id}</span></ListGroup.Item>
                                            <ListGroup.Item>Imgname : <span>{usersDetails?.imgname}</span></ListGroup.Item>
                                            <ListGroup.Item>Parent_id : <span>{usersDetails?.parent_id}</span></ListGroup.Item>
                                            <ListGroup.Item>Title : <span>{usersDetails?.title}</span></ListGroup.Item>
                                            <ListGroup.Item>Thesis: <span>{usersDetails?.thesis}</span></ListGroup.Item>
                                            <ListGroup.Item>Tags: <span>{usersDetails?.tags}</span></ListGroup.Item>
                                        </ListGroup>
                                    </Col>

                                    <Col className="column2-profile">
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Created at : <span>{usersDetails?.total_claims}</span></ListGroup.Item>
                                            <ListGroup.Item>Updated at : <span>{usersDetails?.total_votes}</span></ListGroup.Item>
                                            <ListGroup.Item>isDebatePublic : <span>{usersDetails?.isDebatePublic}</span></ListGroup.Item>
                                            <ListGroup.Item>Side : <span>{usersDetails?.total_contributions}</span></ListGroup.Item>
                                            <ListGroup.Item>Total Votes : <span>{usersDetails?.total_votes}</span></ListGroup.Item>
                                            <ListGroup.Item>Voting Allowed : <span>{usersDetails?.voting_allowed}</span></ListGroup.Item>
                                            <ListGroup.Item>isType : <span>{usersDetails?.isType}</span></ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    );

}

export default SingleUserDetail;