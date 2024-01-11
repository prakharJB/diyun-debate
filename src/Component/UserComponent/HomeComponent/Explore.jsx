import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import tHn from "../../../locales/he.json";
import axios from "axios";
import { Link } from "react-router-dom";
import coverImg from "../../../Assets/demo-portal-cover.jpeg";  // Replace with the actual path

function Explore() {
  const [items, setItems] = useState();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const url = "https://www.kialo.com/api/v1/discussiontags/featured?timestamp=1701781747945&dfuipoldyz=gt045bfs";
  //       const responseData = await axios.get(url);
  //       console.log("API Response:", responseData.data);
  //       setItems(responseData.data.featuredTags);
  //       console.log(items);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <section className="explore-bg">
        <Container>
          <Row>
            <Col className="bg text-center">
              <div>
                <h1 className="text-center explore-page__headline">{tHn.explore_debates}</h1>
                {/* {items?.map((val, index) => (
                <Link key={index} to={`/explore/tags/${val}`} className="mx-1 tags-btn" >{val}</Link>
                ))} */}
                <div className="mobile-flex-wrap">
                  <Link to={`/explore/tags/Politics`} className="mx-1 tags-btn" >פּוֹלִיטִיקָה</Link>
                  <Link to={`/explore/tags/Philosophy`} className="mx-1 tags-btn" >פִילוֹסוֹפִיָה</Link>
                  <Link to={`/explore/tags/Science`} className="mx-1 tags-btn" >מַדָע</Link>
                  <Link to={`/explore/tags/Ethics`} className="mx-1 tags-btn" >אֶתִיקָה</Link>
                  <Link to={`/explore/tags/Gender`} className="mx-1 tags-btn" >אֶתִיקָה</Link>
                  <Link to={`/explore/tags/Religion`} className="mx-1 tags-btn" >דָת</Link>
                  <Link to={`/explore/tags/Technology`} className="mx-1 tags-btn" >טֶכנוֹלוֹגִיָה</Link>
                </div>
              </div>
              <Link className="btn-show-tags" to="/explore/tags">ראה עוד</Link>
              {/* Politics component */}          
            </Col>
          </Row>          
        </Container>
      </section>
    </>
  );
}

export default Explore;
