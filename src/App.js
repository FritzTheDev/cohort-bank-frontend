import React, { useEffect, useState } from "react";
import Axios from "axios";
import {
  Container,
  Modal,
  Button,
  Form,
  Card,
  ListGroup,
  Col,
  Row
} from "react-bootstrap";

function App() {
  const [branches, setBranches] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editTarget, setEditTarget] = useState(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const [editedName, setEditedName] = useState("");
  const [editedAddress, setEditedAddress] = useState("");

  useEffect(() => {
    const getBranches = async () => {
      const res = await Axios.get(
        "https://staging-cohort-bank.herokuapp.com/branches"
      );
      setBranches(res.data);
    };
    getBranches();
  }, []);

  const deleteBranch = async id => {
    await Axios.delete(
      `https://staging-cohort-bank.herokuapp.com/branches/${id}`
    );
    setBranches(branches.filter(branch => !(branch.id === id)));
  };

  const createBranch = async event => {
    event.preventDefault();
    setName("");
    setAddress("");
    const res = await Axios.post(
      `https://staging-cohort-bank.herokuapp.com/branches/`,
      JSON.stringify({ name, address }),
      {
        headers: {
          "content-type": "application/json"
        }
      }
    );
    setBranches([...branches, res.data]);
  };

  const openEditModal = target => {
    setShowModal(true);
    setEditTarget(target);
  };

  const editBranch = async event => {
    event.preventDefault();
    setShowModal(false);
    const res = await Axios.put(
      `https://staging-cohort-bank.herokuapp.com/branches/${editTarget}/`,
      JSON.stringify({ name: editedName, address: editedAddress }),
      {
        headers: {
          "content-type": "application/json"
        }
      }
    );
    const otherBranches = branches.filter(branch => branch.id !== editTarget);
    setBranches([...otherBranches, res.data]);
  };

  const renderBranches = branchList => {
    return branchList.map(branch => (
      <ListGroup.Item key={branch.id}>
        {branch.name} - {branch.address}
        <Button
          className="btn-danger float-right"
          onClick={() => {
            deleteBranch(branch.id);
          }}
        >
          Delete
        </Button>
        <Button
          className="btn-success mx-2 float-right"
          onClick={() => openEditModal(branch.id)}
        >
          Edit
        </Button>
      </ListGroup.Item>
    ));
  };

  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Dialog>
          <Form onSubmit={event => editBranch(event)}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Branch</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form.Group>
                <Form.Control
                  placeholder="Branch Name"
                  value={editedName}
                  onChange={event => setEditedName(event.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  placeholder="Branch Address"
                  value={editedAddress}
                  onChange={event => setEditedAddress(event.target.value)}
                />
              </Form.Group>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
              <Button type="submit" variant="primary">Save changes</Button>
            </Modal.Footer>
          </Form>
        </Modal.Dialog>
      </Modal>
      <Container>
        <Card className="text-center p-3">
          <Row>
            <Col
              md={{ span: 8, offset: 2 }}
              lg={{ span: 6, offset: 3 }}
              xl={{ span: 6, offset: 3 }}
            >
              <Form onSubmit={event => createBranch(event)}>
                <Form.Group>
                  <Form.Control
                    placeholder="Branch Name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    placeholder="Branch Address"
                    value={address}
                    onChange={event => setAddress(event.target.value)}
                  />
                </Form.Group>
                <Button color="primary" type="submit">
                  Add New Branch
                </Button>
              </Form>
            </Col>
          </Row>
        </Card>
        <Card>
          <ListGroup>{renderBranches(branches)}</ListGroup>
        </Card>
      </Container>
    </>
  );
}

export default App;
