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
import {
  getBranches,
  createBranch,
  editBranch,
  deleteBranch
} from "../data/actions/branch.actions";

const BaseBranchListPage = ({
  loading,
  branches,
  error,
  getAllBranches,
  createNewBranch,
  editBranch,
  deleteBranch
}) => {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editTarget, setEditTarget] = useState(null);
  const [editBranchName, setEditBranchName] = useState("");
  const [editBranchAddress, setEditBranchAddress] = useState("");

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

  const doEditBranch = event => {
    event.preventDefault();
    setEditModal(false);
    editBranch(editBranchName, editBranchAddress, editTarget);
  }

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
            <Button variant="success" className="mx-2" onClick={() => {
              setEditModal(true);
              setEditTarget(branch.id);
            }}>
              Edit
            </Button>
            <Button
              variant="danger"
              className="mx-2"
              onClick={() => deleteBranch(branch.id)}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return (
    <>
      <Modal show={editModal} onHide={() => setEditModal(false)}>
        <Modal.Header>
          <Modal.Title className="text-center">Edit Branch</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={event => doEditBranch(event)}>
            <Form.Group>
              <Form.Label>Branch Name</Form.Label>
              <Form.Control
                value={editBranchName}
                onChange={e => setEditBranchName(e.target.value)}
              />
              <Form.Label>Branch Address</Form.Label>
              <Form.Control
                value={editBranchAddress}
                onChange={e => setEditBranchAddress(e.target.value)}
              />
            </Form.Group>
            <Button type="submit">Add Branch</Button>
          </Form>
        </Modal.Body>
      </Modal>
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
    createNewBranch: (name, address) => dispatch(createBranch(name, address)),
    editBranch: (name, address, id) => dispatch(editBranch(name, address, id)),
    deleteBranch: id => dispatch(deleteBranch(id))
  };
};

export const BranchListPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseBranchListPage);
