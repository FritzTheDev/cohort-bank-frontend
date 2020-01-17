import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container, Card, Button, Col, Row, Modal } from "react-bootstrap";
import { getBranches } from "../data/actions/branch.actions";

const BaseBranchListPage = ({
  loading,
  branches,
  error,
  getAllBranches
}) => {
  const [addModal, setAddModal] = useState(false);
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
    <>
    <Modal show={addModal} onHide={() => setAddModal(false)}>
      <Modal.Header>
        <Modal.Title className="text-center">Add A Branch</Modal.Title>
      </Modal.Header>
    </Modal>
    <Container className="text-center">
      <h1 className="m-4">Branches</h1>
      <Button onClick={() => setAddModal(true)}>Add Branch</Button>
      <Row>{!error && !loading && renderBranches()}</Row>
    </Container>
    </>
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
