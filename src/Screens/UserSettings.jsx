import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from "react";
import Header from "../Layouts/Header";
import profilePic from "../Assets/default_229_128x128.jpeg";

function UserSettings() {

    const [show, setShow] = useState(false);
    const [file, setFile] = useState(null);
    const [profilePic, setProfilePic] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleFileChange = (e) => {
        debugger
        const selectedFile = e.target.files[0];
        setFile(selectedFile)
        console.log(file)
    };

    const handleUpload = async () => {
        if (!file) {
            alert("Please select a file.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch("YOUR_API_ENDPOINT", {
                method: "POST",
                body: formData,
                // Include any headers or authorization tokens as needed
            });

            if (response.ok) {
                const responseData = await response.json();

                setProfilePic(responseData.profilePic);
                alert("Profile picture changed successfully!");
                handleClose();
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while uploading the profile picture.");
        }
    };



    return (
        <>
            <Header />
            <div className="user-setting" >
                <section className="Section-user-setting" >
                    <Container>
                        <h2>User Settings</h2>
                        <form action="" className="user-profile" >
                            <div id="profile-container" >
                                <div className="profile-btn" >
                                    <p class="name-usr">Profile Picture</p>
                                    <label htmlFor="fileToUpload">
                                        <div className="profile-pic">
                                            <img src={profilePic} /> 
                                        </div>
                                    </label>
                                    <input type="File" name="fileToUpload" id="fileToUpload" className="profile-chang" onChange={handleFileChange} />

                                    <label for="files">JPEG, PNG. Max. 16 MB</label>
                                    <button id="remove-button"
                                    // onclick={removeProfilePicture()}
                                    >Remove</button>
                                    <button id="change-button"
                                    // onclick={document.getElementById('fileInput').click()}
                                    >Replace</button>
                                </div>
                                <div class="user-setting-frm" >
                                    <label for="fname" class="name-usr">Username</label>
                                    <input type="text" id="fname" name="firstname" disabled></input>
                                    <p>Please contact support to have your username changed.</p>
                                </div>
                                <div class="user-setting-frm">
                                    <label for="email" class="name-usr">Email Address</label>
                                    <input type="email" id="email" name="email" required disabled />
                                </div>
                                <div class="user-check-box">
                                    <input type="checkbox" id="check-bx" name="email-id" value="" />
                                    <label for="vehicle1"> Others can invite me via my email address or invite links</label>
                                </div>
                            </div>


                            <label htmlFor="fname"class="name-usr">Password</label>
                            <Button variant="primary" onClick={handleShow}>Change Password</Button>

                            <Modal show={show} onHide={handleClose} className="paswrd-modal" >
                                <Modal.Header closeButton>
                                    <Modal.Title><h2>Change your password</h2></Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <label for="confirmPassword">Old Password:</label>
                                    <input type="password" id="oldPassword" className="user-pswrd" name="oldPassword" title="Old password" placeholder="Please enter your old password" />
                                    <div className="frgt-pwd" >
                                        <a href="">Forgot password</a>
                                    </div>
                                    <label for="newPassword">New Password:</label>
                                    <input type="password" id="newPassword" className="user-pswrd" name="newPassword" title="New password" placeholder="Please enter your new password" />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Cancel
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Save
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </form>
                    </Container>
                </section>
            </div>
        </>
    )
}


export default UserSettings;