import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

import { login } from "../data/actions/auth.actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const BaseLoginPage = ({ logIn, loggingIn, error, isAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    logIn(username, password);
    setUsername("");
    setPassword("");
  };

  if (isAuthenticated) {
    return <Redirect to="/branches" />
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
                  <Form.Control
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button type="submit">Log in</Button>
                <Card.Text style={{ color: 'red'}} className="mt-4">{error}</Card.Text>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    loggingIn: state.auth.loggingIn,
    isAuthenticated: state.auth.isAuthenticated,
    error: state.auth.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: (username, password) => dispatch(login(username, password))
  };
};

export const LoginPage = connect(mapStateToProps, mapDispatchToProps)(BaseLoginPage);
