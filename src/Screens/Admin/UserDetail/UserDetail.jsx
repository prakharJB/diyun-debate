import { } from "react-bootstrap";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import { Container, Col, Row, Card, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



function UserDetail() {
    const [usersDetails, setUsersDetails] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://laradebate.jmbliss.com/api/admin/user/${id}`);
                setUsersDetails(response?.data);
                console.log(response?.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [id]);

    return (
        <>
            {/* <AdminDashboard /> */}
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
                                            <ListGroup.Item>Username : <span> {usersDetails?.username}</span></ListGroup.Item>
                                            <ListGroup.Item>Name : <span>{usersDetails?.name}</span></ListGroup.Item>
                                            <ListGroup.Item>Email : <span>{usersDetails?.email}</span></ListGroup.Item>
                                            <ListGroup.Item>isProfilePrivate : <span>{usersDetails?.isProfilePrivate}</span></ListGroup.Item>
                                        </ListGroup>

                                    </Col>

                                    <Col className="column2-profile">
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Total Claims : <span>{usersDetails?.total_claims}</span></ListGroup.Item>
                                            <ListGroup.Item>Total Votes : <span>{usersDetails?.total_votes}</span></ListGroup.Item>
                                            <ListGroup.Item>Total Comments : <span>{usersDetails?.total_comments}</span></ListGroup.Item>
                                            <ListGroup.Item>Total Contributions : <span>{usersDetails?.total_contributions}</span></ListGroup.Item>
                                            <ListGroup.Item>Total Received Thanks : <span>{usersDetails?.total_received_thanks}</span></ListGroup.Item>
                                            <ListGroup.Item>Role : <span>{usersDetails?.role}</span></ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )

}

export default UserDetail;