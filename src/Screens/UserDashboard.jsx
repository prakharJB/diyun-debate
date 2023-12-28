import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Header from "../Layouts/Header";
import { useParams,useNavigate, } from "react-router-dom";
import axios from "axios";

function UserDashboard() {
  const { token } = useParams();
  const navigate = useNavigate();

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
  return (
    <>
      <Header />
      <section>
        <Container>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default UserDashboard;
