import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Container,
  Card,
  Button,
  Col,
  Row,
  Modal,
  Form
} from "react-bootstrap";
import { getBranches, createBranch } from "../data/actions/branch.actions";

const BaseBranchListPage = ({
  loading,
  branches,
  error,
  getAllBranches,
  createNewBranch
}) => {
  const [addModal, setAddModal] = useState(false);
  const [newBranchName, setNewBranchName] = useState("");
  const [newBranchAddress, setNewBranchAddress] = useState("");
  useEffect(() => {
    getAllBranches();
  }, [getAllBranches]);

  const createBranch = event => {
    event.preventDefault();
    setAddModal(false);
    createNewBranch(newBranchName, newBranchAddress);
  };

  const renderBranches = () => {
    return branches.map(branch => (
      <Col key={branch.id} className="my-2" xs="12" md={{ span: 4 }}>
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
      {/* Add Modal */}
      <Modal show={addModal} onHide={() => setAddModal(false)}>
        <Modal.Header>
          <Modal.Title className="text-center">Add A Branch</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={event => createBranch(event)}>
            <Form.Group>
              <Form.Label>Branch Name</Form.Label>
              <Form.Control
                value={newBranchName}
                onChange={e => setNewBranchName(e.target.value)}
              />
              <Form.Label>Branch Address</Form.Label>
              <Form.Control
                value={newBranchAddress}
                onChange={e => setNewBranchAddress(e.target.value)}
              />
            </Form.Group>
            <Button type="submit">Add Branch</Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Container className="text-center">
        <h1 className="m-4">Branches</h1>
        <Button className="mb-4" onClick={() => setAddModal(true)}>
          Add Branch
        </Button>
        <Row>{!loading && renderBranches()}</Row>
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
    getAllBranches: () => dispatch(getBranches()),
    createNewBranch: (name, address) => dispatch(createBranch(name, address))
  };
};

export const BranchListPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseBranchListPage);
