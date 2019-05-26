import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import './Footer.css';

export default () => {
  return (
    <footer className="Footer">
      <Container>
        <Row>
          <Col className="Footer-banner" xs={12} md={{ span: 4, offset: 4 }}>
            Made with <p id="Footer-heart">❤</p> by{' '}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://fabioaromanini.com"
            >
              Fábio Romanini
            </a>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 6, offset: 3 }} md={{ span: 2, offset: 5 }}>
            <div className="Footer-links">
              <p>github:</p>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/fabioaromanini/lorem-frontend"
              >
                <p>front </p>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/fabioaromanini/lorem-backend"
              >
                <p>back</p>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
