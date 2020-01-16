import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Axios from "axios";

export const BranchPage = () => {
  const [branches, setBranches] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [addName, setAddName] = useState("");
  const [addAddress, setAddAddress] = useState("");

  const [editModal, setEditModal] = useState(false);
  const [editTarget, setEditTarget] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedAddress, setEditedAddress] = useState("");

  useEffect(() => {
    const getBranches = async () => {
      const res = await Axios.get("https://staging-cohort-bank.herokuapp.com/branches/");
      setBranches(res.data);
    }
    getBranches();
  })

  const createBranch = async event => {
    event.preventDefault();
    setAddModal(false);
    const res = await Axios.post("https://staging-cohort-bank.herokuapp.com/branches/", { addName, addAddress });
    setAddName("");
    setAddAddress("");
    setBranches([...branches, res.data ]);
  }

  const updateBranch = async event => {
    event.preventDefault();
    setEditModal(false);
    const res = await Axios.put(`https://staging-cohort-bank.herokuapp.com/branches/${editTarget}/`, { editedName, editedAddress });
  }

  const deleteBranch = async id => {
    await Axios.delete(`https://staging-cohort-bank.herokuapp.com/branches/${id}/`)
    setBranches(branches.filter(branch => !(branch.id === id)));
  }

  return (
    <Container></Container>
  )
}