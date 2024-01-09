import { Container, Col, Row, Card } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React, { useState, useEffect } from "react";
import coverImg from "../../../Assets/demo-portal-cover.jpeg";
import axios from "axios";
// import { Link } from "react-router-dom";
// import { IoStatsChart } from "react-icons/io5";
// import { FaEye, FaPen, FaVoteYea } from "react-icons/fa";
// import { MdHowToVote } from "react-icons/md";
// import { TbMessage2, TbUsersGroup } from "react-icons/tb";
// import { TbMessageCirclePlus } from "react-icons/tb";
// import { HiMiniTrophy } from "react-icons/hi2";
// import { FaUserPen } from "react-icons/fa6";
// import testDog from "../Assets/test-dog-img.jpeg";
// import testGpt from "../Assets/test-chatgpt.jpeg";
// import testnature from "../Assets/test-nature.jpeg";
// import testedu from "../Assets/test-education.jfif";
// import testcode from "../Assets/test-code.jfif";
// import testrobot from "../Assets/test-robot.jpeg";
// import testgrass from "../Assets/test-grass.jpeg";
// import Counter from "../Layouts/DebateHeader";
// import { fetchData } from "./SunBurst";
// import CreateDebate from "./CreateDebate";
import { useContext } from "react";
import { MyContext } from "../../SunBurst";
import Featured from "./Featured";
import Popular from "./Popular";
import New from "./New";
import Hot from "./Hot";

function HomePortal() {
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
    <>
      <section className="bg-portal pb-4" dir="rtl">
        <Container>
          <Row>
            <Col>
              {/* -------Tab-Home----- */}
              <div className="tab-home-ex">
                <Tabs
                  defaultActiveKey="Featured"
                  id="uncontrolled-tab-example"
                  className="mb-3 p-0 d-flex flex-nowrap "
                >
                  <Tab eventKey="Featured" className="p-0" title="Featured">
                    <Featured />
                  </Tab>
                  <Tab eventKey="Popular" title="Popular">
                    <Popular />
                  </Tab>
                  <Tab eventKey="New" title="New">
                    <New />
                  </Tab>
                  <Tab eventKey="Hot" title="Hot">
                    <Hot />
                  </Tab>
                </Tabs>
              </div>

              {/* -------Tab------ */}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HomePortal;
