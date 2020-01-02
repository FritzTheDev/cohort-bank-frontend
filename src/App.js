import React, { useEffect, useState } from "react";

function App() {
  const [branches, setBranches] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    fetch("https://staging-cohort-bank.herokuapp.com/branches").then(res => {
      res.json().then(data => {
        setBranches(data);
      });
    });
  }, []);

  const deleteBranch = id => {
    fetch(`https://staging-cohort-bank.herokuapp.com/branches/${id}`, {
      method: "DELETE"
    }).then(() =>
      setBranches(branches.filter(branch => !(branch.id === id)))
    );
  };

  const createBranch = (event) => {
    event.preventDefault()
    fetch(`https://staging-cohort-bank.herokuapp.com/branches/`, {
      method: "POST",
      body: JSON.stringify({address, name}),
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => {
      res.json(data => {
        setBranches([...branches, data]);
      });
    });
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
