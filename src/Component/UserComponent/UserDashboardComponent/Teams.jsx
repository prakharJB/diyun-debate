import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Teams = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
    <div>
    <Button variant="primary" onClick={handleShow}>
                <FontAwesomeIcon icon={faPlus} /> New Team
            </Button>

      <Modal show={show} onHide={handleClose} className="team-model">
        <Modal.Header closeButton>
          <Modal.Title><h1>Create a new team</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
                    <Form>
                        <Form.Group controlId="teamName">
                            <Form.Label>Team Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Team Name" />
                            <p>128</p>
                        </Form.Group>
                    </Form>
                    <p>Teams are dedicated private spaces that simplify sharing discussions with a group of people that you invite and administrate.</p>
                    <p>Are you an educator? For student debates, please use <a href="#" target="_blank" rel="noopener noreferrer">www.example.com</a>.</p>
                </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
      <div>
      <p className="text-center mt-5">You do not belong to any teams yet. You can create a new team by clicking on “New Team” above.</p>
    </div>
    </div>
      
    </>
  );
};

export default Teams;