import { Container, Col, Row, Card } from "react-bootstrap";
import React, { useEffect } from "react";
import coverImg from "../../../Assets/demo-portal-cover.jpeg";
import axios from "axios";
import { IoStatsChart } from "react-icons/io5";
import { FaEye, FaPen, FaVoteYea } from "react-icons/fa";
import { TbMessage2, TbUsersGroup } from "react-icons/tb";
import { TbMessageCirclePlus } from "react-icons/tb";
import { HiMiniTrophy } from "react-icons/hi2";
import { FaUserPen } from "react-icons/fa6";
import testDog from "../../../Assets/test-dog-img.jpeg";
import testGpt from "../../../Assets/test-chatgpt.jpeg";
import testnature from "../../../Assets/test-nature.jpeg";
import testedu from "../../../Assets/test-education.jfif";
import testcode from "../../../Assets/test-code.jfif";
import testrobot from "../../../Assets/test-robot.jpeg";
import testgrass from "../../../Assets/test-grass.jpeg";
import { useContext } from "react";
import { MyContext } from "../../SunBurst";
import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Featured(data) {
  // const { text, setText } = useContext(MyContext);
  // const fetchData = async () => {
  //   try {
  //     const url = `${process.env.REACT_APP_BASE_URL}/api/showalldebate`;
  //     const responseData = await axios.get(url);
  //     // console.log("API Response:", responseData.data);
  //     setText(responseData.data.mainDebates);
  //     return responseData.data.mainDebates;
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { state } = useContext(MyContext);
  const [statics, setStatics] = useState();
  // const [text, setText] = useState([]);
  const [topContributors, setTopContributors] = useState();

  const baseUrl = `${process.env.REACT_APP_BASE_URL}/storage/app/public/`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await axios.get(
          `https://laradebate.jmbliss.com/api/overall-stats`
        );
        setStatics(responseData?.data);
        console.log(responseData?.data);

        // Fetch top contributors
        const topContributorsResponse = await axios.get(
          `https://laradebate.jmbliss.com/api/top-contributors`
        );
        setTopContributors(topContributorsResponse?.data?.topContributors);
        console.log(topContributorsResponse?.data?.topContributors);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [state]);

  const filteredData = data?.data?.filter(
    (val) =>
      val?.id !== data?.data[0]?.id &&
      val?.id !== data?.data[1]?.id &&
      val?.id !== data?.data[2]?.id &&
      val?.id !== data?.data[3]?.id &&
      val?.id !== data?.data[4]?.id
  );
  const settings = {
    // initialSlide: 0,
    infinite: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <section className="bg-portal pb-4" dir="rtl">
        <Container>
          <Row>
            <Col>
              <div className="mt-top">
                <Card>
                  <Link to={`/debate/${data?.data[0]?.id}`}>
                    <div className="img-bg-color">
                      <Card.Img
                        variant="top"
                        src={baseUrl + data?.data[0]?.image}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>{data?.data[0]?.title}</Card.Title>
                    </Card.Body>
                  </Link>
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
                <Card>
                  <Link to={`/debate/${data?.data[1]?.id}`}>
                    <div className="img-bg-color">
                      <Card.Img
                        variant="top"
                        src={baseUrl + data?.data[1]?.image}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>{data?.data[1]?.title}</Card.Title>
                    </Card.Body>
                  </Link>
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

                <Card>
                  <Card.Body>
                    <div className="not-hover d-flex align-items-baseline justify-content-between">
                      <IoStatsChart />
                      <Card.Title>ויכוח במספרים</Card.Title>
                    </div>
                    <div className="d-flex align-items-baseline mt-2 justify-content-between">
                      <FaPen />
                      <div className="d-flex align-items-end flex-column">
                        <Card.Text className="m-0">תרומות</Card.Text>
                        <Card.Text className="highlight-number">
                          {statics?.overallContributions}
                        </Card.Text>
                      </div>
                    </div>

                    <hr />
                    <div className="d-flex align-items-baseline justify-content-between">
                      <TbMessageCirclePlus />
                      <div className="d-flex align-items-end flex-column">
                        <Card.Text className="m-0">ויכוחים</Card.Text>
                        <Card.Text className="highlight-number">
                          {statics?.overallParentDebates}
                        </Card.Text>
                      </div>
                    </div>
                    <hr />
                    <div className="d-flex align-items-baseline justify-content-between">
                      <TbMessage2 />
                      <div className="d-flex align-items-end flex-column">
                        <Card.Text className="m-0">טוען</Card.Text>
                        <Card.Text className="highlight-number">
                          {statics?.overallClaims}
                        </Card.Text>
                      </div>
                    </div>

                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
                <Card>
                  <Link to={`/debate/${data?.data[2]?.id}`}>
                    <div className="img-bg-color">
                      <Card.Img
                        variant="top"
                        src={baseUrl + data?.data[2]?.image}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>{data?.data[2]?.title}</Card.Title>
                    </Card.Body>
                  </Link>
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
                <Card>
                  <Link to={`/debate/${data?.data[3]?.id}`}>
                    <div className="img-bg-color">
                      <Card.Img
                        variant="top"
                        src={baseUrl + data?.data[3]?.image}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>{data?.data[3]?.title}</Card.Title>
                    </Card.Body>
                  </Link>
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
                <Card>
                  <Card.Body>
                    <div className="not-hover d-flex align-items-baseline justify-content-between">
                      <HiMiniTrophy />
                      <Card.Title>תורמים מובילים</Card.Title>
                    </div>
                    <Slider {...settings}>
                      {topContributors &&
                        topContributors
                          .reduce((accumulator, Contributors, index) => {
                            // Group contributors into sets of 4
                            if (index % 4 === 0) {
                              accumulator.push([]);
                            }
                            accumulator[accumulator.length - 1].push(
                              Contributors
                            );
                            return accumulator;
                          }, [])
                          .map((group, groupIndex) => (
                            <div
                              key={groupIndex}
                              className=" align-items-baseline mt-2 justify-content-between"
                            >
                              {group.map((contributor, contributorIndex) => (
                                <div>
                                  <div
                                    key={contributorIndex}
                                    className="d-flex justify-content-between"
                                  >
                                    <div>
                                      <Card.Text className="m-0">
                                        {contributor.username}
                                      </Card.Text>
                                      <Card.Text>
                                        תרומות {contributor.total_contributions}
                                      </Card.Text>
                                    </div>
                                    <div>
                                      <Card.Text>
                                        {contributorIndex + 1}
                                      </Card.Text>
                                    </div>
                                  </div>

                                  <hr className="mt-1 mb-0" />
                                </div>
                              ))}
                            </div>
                          ))}
                    </Slider>
                  </Card.Body>
                </Card>
                <Card className="single-card">
                  <div className="d-flex w-100">
                    <div className="w-33">
                      <Card.Body>
                        <div className="not-hover d-flex align-items-baseline justify-content-between">
                          {/* <HiMiniTrophy /> */}
                          <Card.Title>תורמים</Card.Title>
                        </div>
                        <div className="d-flex align-items-baseline mt-2 justify-content-between">
                          {/* <FaUserPen /> */}
                          <div className="d-flex align-items-end flex-column">
                            <Card.Text>שם משתמש</Card.Text>
                            {/* <Card.Text>3,144,694</Card.Text> */}
                          </div>
                        </div>
                        <hr />
                        <div className="d-flex align-items-baseline justify-content-between">
                          {/* <FaUserPen /> */}
                          <div className="d-flex align-items-end flex-column">
                            <Card.Text>שם משתמש</Card.Text>
                            {/* <Card.Text>1,269,270</Card.Text> */}
                          </div>
                        </div>
                        <hr />
                        <div className="d-flex align-items-baseline justify-content-between">
                          {/* <FaUserPen /> */}
                          <div className="d-flex align-items-end flex-column">
                            <Card.Text>שם משתמש</Card.Text>
                            {/* <Card.Text>18,467</Card.Text> */}
                          </div>
                        </div>
                        <hr />
                        <div className="d-flex align-items-baseline justify-content-between">
                          {/* <FaUserPen /> */}
                          <div className="d-flex align-items-end flex-column">
                            <Card.Text>שם משתמש</Card.Text>
                            {/* <Card.Text>18,467</Card.Text> */}
                          </div>
                        </div>
                        <hr />
                        <div className="d-flex align-items-baseline justify-content-between">
                          {/* <FaUserPen /> */}
                          <div className="d-flex align-items-end flex-column">
                            <Card.Text>שם משתמש</Card.Text>
                            {/* <Card.Text>18,467</Card.Text> */}
                          </div>
                        </div>

                        {/* <Button variant="primary">Go somewhere</Button> */}
                      </Card.Body>
                    </div>
                    <div className="w-67 ">
                      <div className="position-relative">
                        <Link to={`/debate/${data?.data[4]?.id}`}>
                          <div className="img-bg-color">
                            <Card.Img
                              className="unset-height single-card-img"
                              variant="top"
                              src={baseUrl + data?.data[4]?.image}
                            />
                          </div>
                          <Card.Body className="position-absolute top-0">
                            <Card.Title>{data?.data[4]?.title}</Card.Title>
                          </Card.Body>
                        </Link>
                      </div>
                      <hr className="position-absolute w-67" />
                      <div className="color-text-icon d-flex align-items-center justify-content-evenly m-0 position-absolute bottom-0">
                        <div className="d-flex align-items-center m-2">
                          <TbMessage2 />
                          <Card.Text className="m-0 p-2">749</Card.Text>
                        </div>
                        <div className="d-flex align-items-center m-2">
                          <FaPen />
                          <Card.Text className="m-0 p-2">10.9ר</Card.Text>
                        </div>
                        <div className="d-flex align-items-center m-2">
                          <FaVoteYea />
                          <Card.Text className="m-0 p-2">6.2ר</Card.Text>
                        </div>
                        <div className="d-flex align-items-center m-2">
                          <TbUsersGroup />
                          <Card.Text className="m-0 p-2">1ר</Card.Text>
                        </div>
                        <div className="d-flex align-items-center m-2">
                          <FaEye />
                          <Card.Text className="m-0 p-2">62.6ר</Card.Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {filteredData &&
                  filteredData?.map((val, index) => (
                    <Card key={index}>
                      <Link to={`/debate/${val?.id}`}>
                        <div className="img-bg-color">
                          <Card.Img variant="top" src={baseUrl + val.image} />
                        </div>
                        <Card.Body>
                          <Card.Title>{val?.title}</Card.Title>
                        </Card.Body>
                      </Link>
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
                  ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Featured;
