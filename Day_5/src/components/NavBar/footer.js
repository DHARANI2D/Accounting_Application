import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <Container>
        <Row className="align-items-center">
          <Col>
            <div className="text-center text-md-left">
              &copy; 2023 ACCOUNTER
            </div>
          </Col>
          <Col className="text-right">
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={32} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={32} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={32} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
