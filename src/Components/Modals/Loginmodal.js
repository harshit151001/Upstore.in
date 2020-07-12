import React from 'react'
import Modal from 'react-bootstrap/Modal'

import Loginwithphone from '../Users/Loginwithphone'

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
<<<<<<< HEAD
          Login
=======
          Login or Signup
>>>>>>> 73a79e3cc20c269c79db2c495eb0682777acc862
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Loginwithphone/>
      </Modal.Body>
    </Modal>
    )
}

export default Loginmodal


