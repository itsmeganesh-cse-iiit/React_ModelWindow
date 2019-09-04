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
        {/* <iframe src="https://www.google.com/maps/place/Sphere+Soft+Solutions+India+Pvt.+Ltd./@17.4416921,78.4731463,17z/data=!4m18!1m12!4m11!1m3!2m2!1d78.4752492!2d17.4418507!1m6!1m2!1s0x3bcb9a082a4f16f1:0x499d0acedbf40eef!2sSphere+Soft+Solutions+India+Pvt.+Ltd.,+1-8-313,+%233rd+Floor,,+Chiran+Fort+Club+Lane,+Opp.+American+Consulate,+Begumpet,+Hyderabad,+Telangana+500003!2m2!1d78.475335!2d17.441687!3m4!1s0x3bcb9a082a4f16f1:0x499d0acedbf40eef!8m2!3d17.441687!4d78.475335" width="100%" height="500px"></iframe> */}
          <iframe title="googleMapAddress" src="https://varvy.com/pagespeed/wicked-fast.html" width="100%" height="500px" frameBorder="0"></iframe>
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
