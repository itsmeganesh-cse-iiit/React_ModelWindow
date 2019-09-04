import React, { Component } from 'react'
import './App.css';
import Modal from 'react-bootstrap/Modal'
import {Button,ButtonToolbar} from 'react-bootstrap'
import { useState } from 'react';
function Example() {
  const [lgShow, setLgShow] = useState(false);

  return (
    <ButtonToolbar>
      <Button onClick={() => setLgShow(true)}>Google Map Address</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Googe Map Address
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe title="googleMapAddress" src="https://maps.google.com/maps?q=spheresoft%20solutions&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="500px" frameBorder="0" ></iframe>
        </Modal.Body>
      </Modal>
    </ButtonToolbar>
  );
}
class App extends Component {
    
  render() {
    return <Example/>
  }}

export default App;
