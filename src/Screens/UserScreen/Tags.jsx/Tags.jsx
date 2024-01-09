import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import tHn from "../../../locales/he.json";
import { Link } from "react-router-dom";
import science from "../../../Assets/science.jpeg";
import philo from "../../../Assets/philosophy.jpeg";
import ethics from "../../../Assets/ethics.jpeg";
import politics from "../../../Assets/politics.jpeg";
import Header from "../../../Layouts/Header";
import Footer from "../../../Layouts/Footer";
import axios from "axios";

function Tags() {
  const [items, setItems] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://laradebate.jmbliss.com/api/debates/tags";
        const responseData = await axios.get(url);
        console.log("API Response:", responseData.data);
        setItems(responseData.data.tags);
        console.log(items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Header />
      <section className="explore-bg">
        <Container>
          <Row>
            <Col className="bg text-center">
              <h2 className="text-center explore-page__headline">
                {tHn.explore_debates}
              </h2>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="portal-tab-template__body ">
        <Container>
          <Row>
            <Col className="">
              {/* <div className="">
                <div className="mt-top">
                  {items?.map((val, index) => (
                    <div key={index}>
                      <Link
                        to={`/explore/tags/${val?.category?.name}`}
                        key={index}
                      >
                        <div className="box-service" key={index}>
                          <img src={coverImg} alt="cover" />
                          <div className="box-padding">
                            <h2>{val?.category?.name}</h2>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div> */}
              <div className="tag-overview-page__content">
                <div className="tag-overview-page__tags">
                  <ul className="tag-card-grid mt-4">
                    {items?.map((val, index) => (
                      <li className="mt-4">
                        <Link
                          to={`/explore/tags/${val}`}
                          key={index}
                          className="tag-card"
                        >
                          <img
                            src={politics}
                            className="image tag-card__image"
                            alt="cover"
                          />
                          <div className="tag-card__overlay"></div>
                          <div className="tag-card__name">{val}</div>
                        </Link>
                      </li>
                    ))}
                    {/* <li className="mt-4">
                      <Link to={`/explore/tags/Ethics`} className="tag-card">
                        <img
                          src={ethics}
                          className="image tag-card__image"
                          alt="cover"
                        />
                        <div className="tag-card__overlay"></div>
                        <div className="tag-card__name">Ethics</div>
                      </Link>
                    </li>
                    <li className="mt-4">
                      <Link to={`/explore/tags/Politics`} className="tag-card">
                        <img
                          src={politics}
                          className="image tag-card__image"
                          alt="cover"
                        />
                        <div className="tag-card__overlay"></div>
                        <div className="tag-card__name">Politics</div>
                      </Link>
                    </li>
                    <li className="mt-4">
                      <Link to={`/explore/tags/Science`} className="tag-card">
                        <img
                          src={science}
                          className="image tag-card__image"
                          alt="cover"
                        />
                        <div className="tag-card__overlay"></div>
                        <div className="tag-card__name">Science</div>
                      </Link>
                    </li>
                    <li className="mt-4">
                      <Link
                        to={`/explore/tags/Philosophy`}
                        className="tag-card"
                      >
                        <img
                          src={philo}
                          className="image tag-card__image"
                          alt="cover"
                        />
                        <div className="tag-card__overlay"></div>
                        <div className="tag-card__name">Philosophy</div>
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default Tags;
