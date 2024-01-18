import { Container, Col, Row, Card } from "react-bootstrap";
import { FaEye, FaPen, FaVoteYea } from "react-icons/fa";
import { TbMessage2, TbUsersGroup } from "react-icons/tb";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ExploreBg(data) {
  const navigate = useNavigate();
  const { category } = useParams();
  const [apiData, setApiData] = useState([]);
  const baseUrl = `${process.env.REACT_APP_BASE_URL}/storage/app/public/`;
  const reversedCategory = category ? [...category].reverse().join("") : "";
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://laradebate.jmbliss.com/api/debates/tag/${reversedCategory}`
      );
      setApiData(response?.data?.debates);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
      if (error?.response?.data?.status == 404) {
        toast.error(error?.response?.data?.message);
        navigate("/explore/tags");
      } else {
        toast.error("tag is not use in debate");
        navigate("/explore/tags");
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <section className="bg-portal pb-4" dir="rtl">
        <Container>
          <Row>
            <div className="mt-top">
              {apiData &&
                apiData?.map((debate) => (
                  <Col key={debate?.id}>
                    <Card>
                      <a href={`/debate/${debate?.id}`}>
                        <Card.Img variant="top" src={baseUrl + debate?.image} />
                        <Card.Body>
                          <Card.Title>{debate.title}</Card.Title>
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
                  </Col>
                ))}
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ExploreBg;
