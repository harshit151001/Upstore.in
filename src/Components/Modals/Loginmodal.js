import React from 'react';
import Modal from 'react-bootstrap/Modal';

import Loginwithphone from '../Users/Loginwithphone';

const Loginmodal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Login or Signup
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Loginwithphone />
      </Modal.Body>
    </Modal>
  );
};

export default Loginmodal;
