import React from 'react'
import AppNavbar from '../NavBar/Navbar';
import Slidebar from '../NavBar/Slidebar';
import { Container, Row, Col } from 'react-bootstrap';
function Analysis() {
  return (
    <div>
        <Container fluid>
        <Row>
          <Col md={1}><Slidebar /></Col>
          <AppNavbar />
          </Row>
          </Container>
    </div>
  )
}

export default Analysis