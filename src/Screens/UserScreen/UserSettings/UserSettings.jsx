import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import React, { useState, useEffect } from "react";
import Header from "../../../Layouts/Header";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ForgetPassword from "../../../Component/UserComponent/ForgetPasswordComponent/ForgetPasswordComponent";
import axios from 'axios';

function UserSettings() {
  const [show, setShow] = useState(false);
  const [file, setFile] = useState(null);
  //ProfilePic update
  const [profilePic, setProfilePic] = useState(null);
  const [biography, setBiography] = useState("");
  // Password Change 
  const [hideTimelineCheckbox, setHideTimelineCheckbox] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState({
    password: '',
    confirmPassword: ''
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const userDetails = useSelector((state) => state?.auth?.userData);
  const handleFileChange = (e) => {
    debugger;
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    console.log(file);
  };

  const handleBiographyChange = (e) => {
    setBiography(e.target.value);
  };

  const handleHideTimelineChange = (e) => {
    setHideTimelineCheckbox(e.target.checked);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // useEffect to handle profilePic update
  // useEffect(() => {
  //   if (file) {
  //     handleUpload(); // You might want to call handleUpload here directly
  //   }
  // }, [file]);
  //Profile picture updload
  // const handleUpload = async () => {
  //   if (!file) {
  //     alert("Please select a file.");
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append("file", file);

  //   try {
  //     const response = await fetch("https://laradebate.jmbliss.com/api/update-profile", {
  //       method: "POST",
  //       body: formData,
  //       headers: {          
  //         Authorization: `Bearer ${userDetails?.token}`, // Replace yourAuthToken with the actual authentication token
  //       },
  //     });

  //     if (response.ok) {
  //       const responseData = await response.json();

  //       setProfilePic(responseData.profilePic);
  //       alert("Profile picture changed successfully!");        
  //       handleClose();
  //     } else {
  //       const errorData = await response.json();
  //       alert(`Error: ${errorData.message}`);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("An error occurred while uploading the profile picture.");
  //   }
  // };   

  //Profile picture updload
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setProfilePic(file);
  }

  const handleApi = async (e) => {
    e.preventDefault();
    try {
      if (!profilePic) {
        alert("Please select a file.");
        return;
      }

      const formData = new FormData();
      formData.append('profilePic', profilePic);
      formData.append('biography', biography);
      formData.append('inviteCheckbox', hideTimelineCheckbox ? 1 : 0);
      formData.append('hideTimelineCheckbox', hideTimelineCheckbox ? 1 : 0);
      formData.append('verification_token', userDetails && userDetails.verification_token);
      
      console.log("User Details:", userDetails);
      console.log("Biography to be sent:", biography);
      console.log("Checkbox status (Hide Timeline):", hideTimelineCheckbox);

      const response = await axios.post('https://laradebate.jmbliss.com/api/update-profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userDetails?.token}`,
        },
        withCredentials: true, 
      });
      console.log(response);
      if (response.status === 200) {
        console.log("Profile Picture from API:", response?.data?.profilePic);
        setProfilePic(response?.data?.profilePic);
  setBiography(response?.data?.biography);
        alert("Profile picture changed successfully!");
        handleClose();
      } else {
        alert(`Error: ${response?.data?.message}`);
      }
    } catch (error) {
      console.error("Error in API request:", error);
      alert("An error occurred while uploading the profile picture.");
    }
  };

  //-------------ForgotPaswword---------
  const [forgetPasswordModal, setForgetPasswordModal] = useState(false);

  const handleForgetPasswordOpen = () => {
    setForgetPasswordModal(true);
    handleClose();
  };


  // ----------Password Change -------------
  const handlePasswordChange = async () => {
    try {
      console.log("newPassword:", newPassword);
      console.log("confirmPassword:", confirmPassword);
      // if new password and confirm password match
      if (newPassword !== confirmPassword) {
        alert("New password and confirm password do not match.");
        return;
      }

      const response = await axios.post(
        "https://laradebate.jmbliss.com/api/changepassword",
        {
          password: newPassword,
          password_confirmation: confirmPassword,
        }
      );
      console.log("Response:", response);
      if (response.status === 200) {
        alert("Password changed successfully!");
        handleClose();
      } else {
        alert(`Error: ${response?.data?.message}`);
      }
    } catch (error) {
      console.error("Error in API request:", error);
    }
  };
  // ------------Password Change -------------


  return (
    <>
      <Header />
      <div className="user-setting">
        <section className="Section-user-setting">
          <Container>
            <h2>User Settings</h2>
            <hr />
            <form action="" className="user-set">
              <div id="profile-container">
                <div className="profile-btn">
                  <p class="name-usr">Profile Picture</p>
                  <label htmlFor="fileToUpload">
                    <div className="profile-pic">
                      {profilePic ? <img class="profile-pic" src={URL.createObjectURL(profilePic)} alt="" onClick={handleApi} /> : <img src="" alt="" />}
                    </div>
                  </label>
                  <input
                    type="file"
                    name="profilePic"
                    id="fileToUpload"
                    className="profile-chang"
                    onChange={handleImageChange}
                  />

                  <label for="files">JPEG, PNG. Max. 16 MB</label>
                  <button
                    id="remove-button"
                  // onclick={removeProfilePicture()}
                  >
                    Remove
                  </button>
                  <button
                    id="change-button"
                  // onclick={document.getElementById('fileInput').click()}
                  >
                    Replace
                  </button>
                </div>
                <div class="user-setting-frm">
                  <label for="fname" class="name-usr">
                    Username
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    value={userDetails?.username}
                    disabled
                  ></input>
                  <p>Please contact support to have your username changed.</p>
                </div>
                <div class="user-setting-frm">
                  <label for="email" class="name-usr">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={userDetails?.email}
                    disabled
                  />
                </div>
                <div class="user-check-box user-setting-frm">
                  <input
                    type="checkbox"
                    id="check-bx"
                    name="email-id"
                    value=""
                  />
                  <label for="vehicle1">
                    {" "}
                    Others can invite me via my email address or invite links
                  </label>
                </div>
                <div class="user-setting-frm">
                  <label htmlFor="fname" class="name-usr">
                    Password
                  </label>
                  <Button
                    variant="primary"
                    className="btn-password"
                    onClick={handleShow}
                  >
                    Change Password
                  </Button>
                </div>
                <div className="profile-set">
                  <h2>Profile Settings</h2>
                  <div class="user-setting-frm">
                    <label for="fname" class="name-usr">
                      Biography (optional)
                    </label>
                  </div>
                  <form action="" className="bio-textarea">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Control
                        as="textarea"
                        rows={3}
                        maxlength="4096"
                        onChange={handleBiographyChange}
                      />
                    </Form.Group>
                    <p>4096</p>
                  </form>
                  <div class="user-check-box user-setting-frm">
                    <input className="mx-2"
                      type="checkbox"
                      id="hide-timeline"
                      // id="check-bx" 
                      name="hide-timeline"
                      checked={hideTimelineCheckbox}
                      onChange={handleHideTimelineChange}
                      value=""
                    />
                    <label for="hide-timeline">
                      {" "}
                      Hide account timeline and statistics
                    </label>
                  </div>
                </div>
                <h2>Your Data</h2>
                <label for="vehicle1" className="contact-support">
                  {" "}
                  Please <Link to={"/contact-us"}> contact support </Link> if
                  you want to export or delete your data.
                </label>
                <div className="data-btn">
                  <button
                    className="close-button"
                  // onclick={removeProfilePicture()}
                  >
                    Close
                  </button>
                  <button
                    className="save-button"
                  // onclick={document.getElementById('fileInput').click()}
                  onClick={handleApi}
                  >
                    Save
                  </button>
                </div>
              </div>

              <Modal show={show} onHide={handleClose} className="paswrd-modal">
                <Modal.Header closeButton>
                  <Modal.Title>
                    <h2>Change your password</h2>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <label for="newPassword">New Password:</label>
                  <input
                    type="password"
                    id="newPassword"
                    className="user-pswrd"
                    name="newPassword"
                    title="New password"
                    placeholder="Please enter your new password"
                    value={newPassword}
                    // onChange={(e) => setNewPassword(e.target.value)}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <div className="frgt-pwd">
                    <div onClick={() => handleForgetPasswordOpen(true)}>
                      Forgot password
                    </div>
                  </div>
                  <label for="confirmPassword">Confirm Password:</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="user-pswrd"
                    name="confirmPassword"
                    title="Confirm password"
                    placeholder="Please enter your new password"
                    value={confirmPassword}
                    // onChange={(e) => setNewPassword(e.target.value)}
                    onChange={handleConfirmPasswordChange}
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={handlePasswordChange}>
                    Save
                  </Button>
                </Modal.Footer>
              </Modal>
            </form>
          </Container>
        </section>
        <ForgetPassword
          show={forgetPasswordModal}
          onHide={() => setForgetPasswordModal(false)}
        />
      </div>
    </>
  );
}

export default UserSettings;