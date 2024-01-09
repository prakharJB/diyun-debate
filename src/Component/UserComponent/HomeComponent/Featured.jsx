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

function Featured(data) {
  // console.log(data)
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

  const baseUrl = `${process.env.REACT_APP_BASE_URL}/storage/app/public/`;

  return (
    <>
      <section className="bg-portal pb-4" dir="rtl">
        <Container>
          <Row>
            <Col>
              <div className="mt-top">
                <Card>
                  <a href="/">
                    <Card.Img variant="top" src={testDog} />
                    <Card.Body>
                      <Card.Title>האם יש לאסור ניסויים בבעלי חיים?</Card.Title>
                      {/* <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text> */}
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </a>
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
                  <a href="/">
                    <Card.Img variant="top" src={testedu} />
                    <Card.Body>
                      <Card.Title>מה חשוב יותר השכלה או מיומנות?</Card.Title>
                      {/* <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text> */}
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </a>
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
                          3,144,694
                        </Card.Text>
                      </div>
                    </div>

                    <hr />
                    <div className="d-flex align-items-baseline justify-content-between">
                      <TbMessageCirclePlus />
                      <div className="d-flex align-items-end flex-column">
                        <Card.Text className="m-0">ויכוחים</Card.Text>
                        <Card.Text className="highlight-number">
                          18,467
                        </Card.Text>
                      </div>
                    </div>
                    <hr />
                    <div className="d-flex align-items-baseline justify-content-between">
                      <TbMessage2 />
                      <div className="d-flex align-items-end flex-column">
                        <Card.Text className="m-0">טוען</Card.Text>
                        <Card.Text className="highlight-number">
                          741,211
                        </Card.Text>
                      </div>
                    </div>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
                <Card>
                  <a href="/">
                    <Card.Img variant="top" src={testcode} />
                    <Card.Body>
                      <Card.Title>
                        איזו טכנולוגיה שימושית יותר במגזר ה-IT?
                      </Card.Title>
                      {/* <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text> */}
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </a>
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
                  <a href="/">
                    <Card.Img variant="top" src={coverImg} />
                    <Card.Body>
                      <Card.Title>
                        האם ממשלות צריכות אי פעם להגביל את חופש הביטוי?
                      </Card.Title>
                      {/* <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text> */}
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </a>
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
                    <div className="d-flex align-items-baseline mt-2 justify-content-between">
                      <FaUserPen />
                      <div className="d-flex align-items-end flex-column">
                        <Card.Text>שם משתמש .1</Card.Text>
                        {/* <Card.Text>3,144,694</Card.Text> */}
                      </div>
                    </div>
                    <hr />
                    <div className="d-flex align-items-baseline justify-content-between">
                      <FaUserPen />
                      <div className="d-flex align-items-end flex-column">
                        <Card.Text>שם משתמש .2</Card.Text>
                        {/* <Card.Text>1,269,270</Card.Text> */}
                      </div>
                    </div>
                    <hr />
                    <div className="d-flex align-items-baseline justify-content-between">
                      <FaUserPen />
                      <div className="d-flex align-items-end flex-column">
                        <Card.Text>שם משתמש .3</Card.Text>
                        {/* <Card.Text>18,467</Card.Text> */}
                      </div>
                    </div>
                    <hr />
                    <div className="d-flex align-items-baseline justify-content-between">
                      <FaUserPen />
                      <div className="d-flex align-items-end flex-column">
                        <Card.Text>שם משתמש .4</Card.Text>
                        {/* <Card.Text>18,467</Card.Text> */}
                      </div>
                    </div>
                    <hr />
                    <div className="d-flex align-items-baseline justify-content-between">
                      <FaUserPen />
                      <div className="d-flex align-items-end flex-column">
                        <Card.Text>שם משתמש .5</Card.Text>
                        {/* <Card.Text>18,467</Card.Text> */}
                      </div>
                    </div>

                    {/* <Button variant="primary">Go somewhere</Button> */}
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
                        <a href="/">
                          <Card.Img
                            className="unset-height single-card-img"
                            variant="top"
                            src={testGpt}
                          />
                          <Card.Body className="position-absolute top-0">
                            <Card.Title>Chat GPT הוא טוב או רע?</Card.Title>
                            {/* <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text> */}
                            {/* <Button variant="primary">Go somewhere</Button> */}
                          </Card.Body>
                        </a>
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
                <Card>
                  <a href="/">
                    <Card.Img variant="top" src={testgrass} />
                    <Card.Body>
                      <Card.Title>
                        האם יש לאסור מכירת מזון מהונדס גנטית?
                      </Card.Title>
                      {/* <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text> */}
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </a>
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
                  <a href="/">
                    <Card.Img variant="top" src={testrobot} />
                    <Card.Body>
                      <Card.Title>
                        האם רובוטים שעושים עבודה יהיו טובים יותר?
                      </Card.Title>
                      {/* <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text> */}
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </a>
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
                  <a href="/">
                    <Card.Img variant="top" src={testnature} />
                    <Card.Body>
                      <Card.Title>
                        האם העולם יהיה מקום טוב יותר בלי בני אדם?
                      </Card.Title>
                      {/* <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text> */}
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </a>
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
                {data.data &&
                  data?.data?.map((val, index) => (
                    <Card>
                      <a href={`/debate/${val.id}`} key={index}>
                        <Card.Img variant="top" src={baseUrl + val.image} />
                        <Card.Body>
                          <Card.Title>{val.title}</Card.Title>
                        </Card.Body>
                      </a>
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
