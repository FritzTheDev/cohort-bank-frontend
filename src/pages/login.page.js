import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

import { login } from "../data/actions/auth.actions";
import { connect } from "react-redux";

const BaseLoginPage = ({ logIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    logIn(username, password);
    setUsername("");
    setPassword("");
  }

  return (
    <Container className="my-5">
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Card>
            <Card.Header>
              <Card.Title className="text-center my-0">Log In</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={event => onSubmit(event)} className="text-center">
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Button type="submit">Log in</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: (username, password) => dispatch(login(username, password))
  }
}

export const LoginPage = connect(null, mapDispatchToProps)(BaseLoginPage)