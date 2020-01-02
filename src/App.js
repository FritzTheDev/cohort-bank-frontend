import React, { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [branches, setBranches] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    const getBranches = async () => {
      const res = await Axios.get('https://staging-cohort-bank.herokuapp.com/branches');
      setBranches(res.data);
    }
    getBranches();
  }, []);

  const deleteBranch = async (id) => {
    await Axios.delete(`https://staging-cohort-bank.herokuapp.com/branches/${id}`)
    setBranches(branches.filter(branch => !(branch.id === id)))
  };

  const createBranch = async (event) => {
    event.preventDefault()
    const res = await Axios.post(`https://staging-cohort-bank.herokuapp.com/branches/`, JSON.stringify({name, address}), {
      headers: {
        'content-type': 'application/json'
      }
    });
    setBranches([...branches, res.data]);
  };
  const renderBranches = branchList => {
    return branchList.map(branch => (
      <li key={branch.id}>
        {branch.name} - {branch.address} -{" "}
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => {
            deleteBranch(branch.id);
          }}
        >
          Delete
        </button>
      </li>
    ));
  };

  return (
    <div>
      <form onSubmit={event => createBranch(event)}>
        <input placeholder="Branch Name" value={name} onChange={event => setName(event.target.value)} />
        <input placeholder="Branch Address" value={address} onChange={event => setAddress(event.target.value)} />
        <button type="submit">Add New Branch</button>
      </form>
      <ul>{renderBranches(branches)}</ul>
    </div>
  );
}

export default App;
