import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function Alert({restart, showAlert}){
    return(
        <Modal centered show={showAlert} style={{ minWidth: '360px'}}>
        <Modal.Body style={{ minHeight: '250px'}}>
        <Modal.Title style={{ fontSize: '30px'}}>Oops...</Modal.Title>
          <p className='mt-3 fs-3'>You are bankrupt, click the button to restart the game!</p>
          <div className="text-center">
          <Button variant="secondary" size='lg' onClick={restart}>
            Restart
          </Button>
          </div>
        </Modal.Body>
      </Modal>
    )
}

export default Alert;