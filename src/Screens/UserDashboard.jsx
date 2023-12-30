import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Header from "../Layouts/Header";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import userProfile from "../Assets/default_229_128x128.jpeg";
import Nav from "react-bootstrap/Nav";
import Overview from "../Component/Overview";
import Respond from "../Component/Respond";
import Following from "../Component/Following";
import All from "../Component/All";
import Own from "../Component/Own";
import Recent from "../Component/Recent";
import Recommended from "../Component/Recommended";
import Teams from "../Component/Teams";
import Footer from "../Layouts/Footer";

function UserDashboard() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState("Overview");

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  const fetchPortfolio = async () => {
    // debugger;
    try {
      const url = `${process.env.REACT_APP_BASE_URL}/api/verify-email/${token}`;
      const res = await axios.get(url);

      //console.log(res);
      if (res.data == "user not found or invalid token") {
        navigate("/login");
      } else {
        const user = {
          username: res?.data[0],
          email: res?.data[1],
        };
        localStorage.setItem("user", JSON.stringify(user));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (token) {
      fetchPortfolio();
    }
  }, []);

  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case "Overview":
        return <Overview />;
      case "Respond":
        return <Respond />;
      case "Following":
        return <Following />;
      case "All":
        return <All />;
      case "Own":
        return <Own />;
      case "Recent":
        return <Recent/>;
      case "Recommended":
        return <Recommended />;
      case "Teams":
        return <Teams />;

      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div className="py-5 pt-0 mt-0 dashboard-page-main">
        <section className="userprofile mt-0 my-5 pt-5">
          <Container>
            <Row className="d-flex">
              <Col className="d-flex">
                <div className="col-md-2 my-page-header__left-items">
                  <img
                    src={userProfile}
                    alt="User Profile Image"
                    className="img-fluid"
                  />
                </div>
                <div className="my-page-header__left-items">
                  <h1>My Diyun</h1>
                </div>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </section>

        <section className="portal-tab-template__body">
          <Container className="portal-tab-template__content-header">
            <Row className="tab-switch my-5 border-bottom">
              <Col className="tab-switch__tabs my-4">
                <Nav variant="underline" defaultActiveKey="link-1">
                  <Nav.Item>
                    <Nav.Link
                      onClick={() => handleTabSelect("Overview")}
                      eventKey="link-1"
                    >
                      Overview
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      onClick={() => handleTabSelect("Respond")}
                      eventKey="link-2"
                    >
                      Respond
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      onClick={() => handleTabSelect("Following")}
                      eventKey="link-3"
                    >
                      Following
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      onClick={() => handleTabSelect("All")}
                      eventKey="link-4"
                    >
                      All
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      onClick={() => handleTabSelect("Own")}
                      eventKey="link-5"
                    >
                      Own
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      onClick={() => handleTabSelect("Recent")}
                      eventKey="link-6"
                    >
                      Recent
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      onClick={() => handleTabSelect("Recommended")}
                      eventKey="link-7"
                    >
                      Recommended
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      onClick={() => handleTabSelect("Teams")}
                      eventKey="link-8"
                    >
                      Teams
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>

            <Row className="tab-based-content">{renderTabContent()}</Row>
          </Container>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default UserDashboard;
