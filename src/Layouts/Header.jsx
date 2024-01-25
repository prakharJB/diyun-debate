// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState, useEffect, useRef } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import tHn from "../locales/he.json";
import Signup from "../Component/UserComponent/SignupComponent/SignupComponent";
import Login from "../Component/UserComponent/LoginComponent/LoginComponent";
import CreateDebate from "../Component/UserComponent/CeateDebateComponent/CreateDebate";
import logo from "../Assets/LOGO (2).png";
import { fetchData } from "../Component/SunBurst";
import HomePortal from "../Component/UserComponent/HomeComponent/HomePortal";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation } from "react-router-dom";
import userProfile from "../Assets/default_229_128x128.jpeg";
import { SlEnvolopeLetter } from "react-icons/sl";
import { IoIosSettings } from "react-icons/io";
import { MdHomeFilled } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { PiUsersFourFill } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
import { removeToken } from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import logoimgdark from "../Assets/White-logo.png";
import logoimg from "../Assets/Blue-logo.png";
import { FaMagnifyingGlass } from "react-icons/fa6";


function Header() {

  const [modalShow, setModalShow] = useState(false);
  const [LoginmodalShow, setLoginModalShow] = useState(false);
  const [CreateDebateModal, setCreateDebateModal] = useState(false);
  const [logInUser, setLogInUser] = useState();
  const location = useLocation();
  const dispatch = useDispatch();
  const token = useSelector((state) => state?.auth?.token);

  useEffect(() => {
    const hasBrokerContentClass = document.querySelector('section').classList?.contains('banner-class');

    if (hasBrokerContentClass) {
      document.body.classList.add('banner-header');
    }

    // Cleanup function to remove the added class when the component unmounts
    return () => {
      if (hasBrokerContentClass) {
        document.body.classList.remove('banner-header');
      }
    };
  }, []);


const [scroll, setScroll] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  // Attach the scroll event listener when the component mounts
  window.addEventListener('scroll', handleScroll);

  // Clean up the event listener when the component unmounts
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []); // Empty dependency array means this effect runs once after the initial render

// Add or remove the 'scrolled' class based on the scroll position
const isScrolled = scroll >= 60;



  useEffect(() => {
    setLogInUser(token);
  }, []);

 
  const [activeModal, setActiveModal] = useState(null);

  // Modify the functions that open the modals to set the active modal
  const handleLoginModalOpen = () => {
    setActiveModal("login");
    setLoginModalShow(true);
  };

  const handleSignupModalOpen = () => {
    setActiveModal("signup");
    setModalShow(true);
  };

// header active link

  
  return (
    <>
      <Navbar
        dir="rtl"
        collapseOnSelect
        expand="lg"
        className={`test ${isScrolled ? 'scrolled' : ''}`}
        
      >
        <Navbar.Brand as={Link} to="/">
          <img className="logoimgdark"  src={logoimg} alt="logo" />
          <img  className="logoimglight" src={logoimgdark} alt="darklogo" />
          
        </Navbar.Brand>
        {logInUser ? (
          <>
            <Nav className="me-auto mobile-btn-bottom">
              <Nav.Link
                className={location.pathname === "/my" ? "activeNav" : ""}
                to="/my"
                as={Link}
              >
                {tHn.My_Diyun}
              </Nav.Link>

              <Nav.Link
                className={location.pathname === "/explore" ? "activeNav" : ""}
                to="/explore"
                as={Link}
              >
                {tHn.explore}
              </Nav.Link>

              <Nav.Link as={Link} to="/search">
                {/* <HiMagnifyingGlass /> */}
                <i class="fa-solid fa-magnifying-glass"></i>
              </Nav.Link>
            </Nav>
            <Nav className="mx-2 d-flex align-items-center">
              <Nav.Link
                className="login-btn text-decoration-none nav-link border border-primary rounded-1 p-3 pt-1 pb-1 create-new-btn"
                onClick={() => setCreateDebateModal(true)}
              >
               + 	&nbsp;{tHn.new}
              </Nav.Link>

              <NavDropdown
                className="profile-nav"
                title={
                  <img
                    src={userProfile}
                    alt="profile"
                    className="rounded-circle profile-img-style"
                  />
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item
                  className="d-flex align-items-center px-4 py-2"
                  as={Link}
                  to="/contact-us"
                >
                  <SlEnvolopeLetter className="mx-2" />
                  {tHn.Contact}
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="d-flex align-items-center px-4 py-2"
                  as={Link}
                  to="/my/user-setting"
                >
                  <IoIosSettings className="mx-2" />
                  {tHn.User_Settings}
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="d-flex align-items-center px-4 py-2"
                  to="/my"
                  as={Link}
                >
                  {" "}
                  <MdHomeFilled className="mx-2" />
                  {tHn.My_Diyun}
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="d-flex align-items-center px-4 py-2"
                  to="/my/Profile"
                  as={Link}
                >
                  {" "}
                  <FaUser className="mx-2" />
                  {tHn.Profile}
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="d-flex align-items-center px-4 py-2"
                  to="/teams"
                  as={Link}
                >
                  {" "}
                  <PiUsersFourFill className="mx-2" />
                  {tHn.Teams}
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="d-flex align-items-center px-4 py-2"
                  // onClick={logOut}
                  onClick={() => dispatch(removeToken())}
                  to="/"
                  as={Link}
                >
                  <CiLogout className="mx-2" />
                  {tHn.Logout}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </>
        ) : (
          <>
            <Nav className="me-auto mobile-btn-bottom">
              <Nav.Link
                className={location.pathname === "/explore" ? "activeNav" : ""}
                to="/explore"
                as={Link}
              >
                {tHn.explore}
              </Nav.Link>

              <Nav.Link
                className={location.pathname === "/tour" ? "activeNav" : ""}
                to="/tour"
                as={Link}
              >
                {tHn.tour}
              </Nav.Link>

              <Nav.Link onClick={() => setLoginModalShow(true)}>
                +{tHn.new}
              </Nav.Link>

              <Nav.Link as={Link} to="/search">
              <FaMagnifyingGlass />
              </Nav.Link>
            </Nav>
            <Nav className="mx-2">
              <Nav.Link
                className="login-btn"
                onClick={() => setLoginModalShow(true)}
              >
                {tHn.log_in}
              </Nav.Link>

              <Nav.Link
                className="signup-btn"
                onClick={() => setModalShow(true)}
              >
                {tHn.sign_up}
              </Nav.Link>
            </Nav>
          </>
        )}
      </Navbar>
      <CreateDebate
        show={CreateDebateModal}
        onHide={() => setCreateDebateModal(false)}
      />
      <Login
        show={LoginmodalShow}
        onHide={() => setLoginModalShow(false)}
        switchToSignup={() => {
          setActiveModal("signup");
          setModalShow(true);
        }}
      />

      <Signup
        show={modalShow}
        onHide={() => setModalShow(false)}
        switchToLogin={() => {
          setActiveModal("login");
          setLoginModalShow(true);
        }}
      />
    </>
  );
}

export default Header;
