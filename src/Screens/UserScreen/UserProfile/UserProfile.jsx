import { Container } from "react-bootstrap";
import Header from "../../../Layouts/Header";

function UserProfile() {
  return (
    <>
      <Header />
      <div className="user-profile">
        <div className="section-user-profile">
          <Container></Container>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
