import React from "react";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar/>
      <Jumbotron backgroundImage="https://images.unsplash.com/photo-1512805147242-c3e79caf64bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
        <h1>TableIt</h1>
        <h2>Find dinner tonight... and tomorrow night.</h2>
      </Jumbotron>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To TabeIt!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Yolo #swagginainteasy
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;