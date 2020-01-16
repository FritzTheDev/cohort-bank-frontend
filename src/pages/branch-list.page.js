import React from "react";
import { connect } from "react-redux";
import { Container, Card } from "react-bootstrap";

export const BranchListPage = props => {
  return (
    <Container>
      <Card>
        <h3 className="text-center">Branches</h3>
      </Card>
    </Container>
  );
};
