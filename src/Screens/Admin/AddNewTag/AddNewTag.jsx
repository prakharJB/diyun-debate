import { } from "react-bootstrap";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import { Container, Col, Row, Card } from "react-bootstrap";
import { FaEye, FaPen, FaVoteYea } from "react-icons/fa";
import { TbMessage2, TbUsersGroup } from "react-icons/tb";

function AddNewTag() {
    <>
        <AdminDashboard />
        <div className="all-debate" >
            <section className="bg-portal pb-4" dir="rtl">
                <Container>
                    <Row>
                        <div className="mt-top">
                            <Col>
                                <Card>
                                    <Card.Img variant="top" />
                                    <Card.Body>
                                        <Card.Title></Card.Title>
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
                            </Col>
                        </div>
                    </Row>
                </Container>
            </section>
        </div>
    </>
}

export default AddNewTag;