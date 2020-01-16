import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export const LoginPage = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Card>
            <Card.Header>
              <Card.Title className="text-center my-0">Log In</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form className="text-center">
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
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
