// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState, useEffect, useRef } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import tHn from "../locales/he.json";
import Signup from "../Component/SignupComponent";
import Login from "../Component/LoginComponent";
import CreateDebate from "../Component/CreateDebate";
import logo from "../Assets/LOGO (2).png";
import { fetchData } from "../Component/SunBurst";
import HomePortal from "../Component/HomePortal";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation } from "react-router-dom";
import userProfile from "../Assets/default_229_128x128.jpeg";

function Header() {
  const [isDarkHeader, setDarkHeader] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [LoginmodalShow, setLoginModalShow] = useState(false);
  const [CreateDebateModal, setCreateDebateModal] = useState(false);
  const [logInUser, setLogInUser] = useState();
  const location = useLocation();

  const getLoggedUser = () => {
    const user = JSON.parse(localStorage?.getItem("token"));
    setLogInUser(user?.token);
  };

  useEffect(() => {
    getLoggedUser();
  }, []);
  const logOut = () => {
    localStorage.removeItem("token");
  };
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll >= 60) {
        setDarkHeader(true);
      } else {
        setDarkHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
  return (
    <>
      <Navbar
        dir="rtl"
        collapseOnSelect
        expand="lg"
        className={isDarkHeader ? "darkHeader" : "bg-body-tertiary"}
      >
        <Navbar.Brand href="/">{tHn.Diyun}</Navbar.Brand>
        <Nav className="me-auto mobile-btn-bottom">
          {logInUser ? (
            <Nav.Link
              className={location.pathname === "/my" ? "activeNav" : ""}
              href="/my"
            >
              {tHn.My_Diyun}
            </Nav.Link>
          ) : (
            <Nav.Link
              className={location.pathname === "/explore" ? "activeNav" : ""}
              href="/explore"
            >
              {tHn.explore}
            </Nav.Link>
          )}
          {logInUser ? (
            <Nav.Link
              className={location.pathname === "/explore" ? "activeNav" : ""}
              href="/explore"
            >
              {tHn.explore}
            </Nav.Link>
          ) : (
            <Nav.Link
              className={location.pathname === "/tour" ? "activeNav" : ""}
              href="/tour"
            >
              {tHn.tour}
            </Nav.Link>
          )}
          {logInUser ? null : (
            <Nav.Link onClick={() => setLoginModalShow(true)}>
              +{tHn.new}
            </Nav.Link>
          )}

          <Nav.Link href="/search">
            <HiMagnifyingGlass />
          </Nav.Link>
        </Nav>
        <Nav className="mx-2">
          {logInUser ? (
            <Nav.Link onClick={() => setCreateDebateModal(true)}>
              +{tHn.new}
            </Nav.Link>
          ) : (
            <Nav.Link
              className="login-btn"
              onClick={() => setLoginModalShow(true)}
            >
              {tHn.log_in}
            </Nav.Link>
          )}
          {logInUser ? (
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
              <NavDropdown.Item href="/contact-us">
                Contact Support
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                User Settings
              </NavDropdown.Item>
              <NavDropdown.Item href="/my">{tHn.My_Diyun}</NavDropdown.Item>
              <NavDropdown.Item href="/Profile">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="/teams">My Teams</NavDropdown.Item>
              <NavDropdown.Item onClick={logOut} href="/">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Nav.Link className="signup-btn" onClick={() => setModalShow(true)}>
              {tHn.sign_up}
            </Nav.Link>
          )}
        </Nav>
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
