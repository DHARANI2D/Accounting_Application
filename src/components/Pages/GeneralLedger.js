import React from 'react';
import AppNavbar from '../NavBar/Navbar';
import Slidebar from '../NavBar/Slidebar';
import { Container, Row, Col } from 'react-bootstrap';
import './css/GeneralLedger.css'; // Import the CSS file

function GeneralLedger() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={1}><Slidebar /></Col>
          <AppNavbar />
          <Col md={12}>
            <div className="color-container">
              <div className="left-section"></div>
              <div className="right-section"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GeneralLedger;
