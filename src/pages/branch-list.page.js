import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Card, Button, Col, Row } from "react-bootstrap";
import { getBranches } from "../data/actions/branch.actions";

export const BaseBranchListPage = ({
  loading,
  branches,
  error,
  getAllBranches
}) => {
  useEffect(() => {
    getAllBranches();
  }, [getAllBranches]);

  const renderBranches = () => {
    return branches.map(branch => (
      <Col key={branch.id} xs="12" md={{ span: 4 }}>
        <Card>
          <Card.Header>
            <Card.Title className="text-center">{branch.name}</Card.Title>
            <Card.Subtitle className="text-center">
              {branch.address}
            </Card.Subtitle>
          </Card.Header>
          <Card.Body className="text-center">
            <Button variant="success" className="mx-2">
              Edit
            </Button>
            <Button variant="danger" className="mx-2">
              Delete
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return (
    <Container>
      <h1 className="text-center m-4">Branches</h1>
      <Row>{!error && !loading && renderBranches()}</Row>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.branches.loading,
    branches: state.branches.branches,
    error: state.branches.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllBranches: () => dispatch(getBranches())
  };
};

export const BranchListPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseBranchListPage);
