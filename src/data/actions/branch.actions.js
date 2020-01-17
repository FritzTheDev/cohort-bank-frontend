import Axios from "axios";

export const GET_BRANCHES_ATTEMPT = "GET_BRANCHES_ATTEMPT";
export const GET_BRANCHES_SUCCESS = "GET_BRANCHES_SUCCESS";
export const GET_BRANCHES_FAILURE = "GET_BRANCHES_FAILURE";

export const ADD_BRANCH_ATTEMPT = "ADD_BRANCH_ATTEMPT";
export const ADD_BRANCH_SUCCESS = "ADD_BRANCH_SUCCESS";
export const ADD_BRANCH_FAILURE = "ADD_BRANCH_FAILURE";

export const EDIT_BRANCH_ATTEMPT = "EDIT_BRANCH_ATTEMPT";
export const EDIT_BRANCH_SUCCESS = "EDIT_BRANCH_SUCCESS";
export const EDIT_BRANCH_FAILURE = "EDIT_BRANCH_FAILURE";

export const DELETE_BRANCH_ATTEMPT = "DELETE_BRANCH_ATTEMPT";
export const DELETE_BRANCH_SUCCESS = "DELETE_BRANCH_SUCCESS";
export const DELETE_BRANCH_FAILURE = "DELETE_BRANCH_FAILURE";

const requestBranches = () => {
  return {
    type: GET_BRANCHES_ATTEMPT
  };
};

const receiveBranches = branches => {
  return {
    type: GET_BRANCHES_SUCCESS,
    payload: branches
  };
};

const branchesError = message => {
  return {
    type: GET_BRANCHES_FAILURE,
    payload: message
  };
};

const requestAddBranch = () => {
  return {
    type: ADD_BRANCH_ATTEMPT
  };
};

const receiveAddBranch = branch => {
  return {
    type: ADD_BRANCH_SUCCESS,
    payload: branch
  };
};

const branchAddError = message => {
  return {
    type: ADD_BRANCH_FAILURE,
    payload: message
  };
};

const requestEditBranch = () => {
  return {
    type: EDIT_BRANCH_ATTEMPT
  }
}

const receiveEditBranch = branch => {
  return {
    type: EDIT_BRANCH_SUCCESS,
    payload: branch
  }
}

const branchEditError = message => {
  return {
    type: EDIT_BRANCH_FAILURE,
    payload: message
  }
}

const requestDeleteBranch = () => {
  return {
    type: DELETE_BRANCH_ATTEMPT
  }
}

const receiveDeleteBranch = id => {
  return {
    type: DELETE_BRANCH_SUCCESS,
    payload: id
  }
}

const branchDeleteError = message => {
  return {
    type: DELETE_BRANCH_FAILURE,
    payload: message
  }
}

export const getBranches = () => (dispatch, getState) => {
  dispatch(requestBranches());
  Axios.get("https://staging-cohort-bank.herokuapp.com/api/branches/", {
    headers: {
      authorization: `Bearer ${getState().auth.token}`
    }
  })
    .then(response => {
      dispatch(receiveBranches(response.data));
    })
    .catch(error => {
      dispatch(branchesError(error.message));
    });
};

export const createBranch = (name, address) => (dispatch, getState) => {
  dispatch(requestAddBranch());
  Axios.post("https://staging-cohort-bank.herokuapp.com/api/branches/", { name, address }, {
    headers: {
      authorization: `Bearer ${getState().auth.token}`
    }
  })
    .then(response => {
      dispatch(receiveAddBranch(response.data));
    })
    .catch(error => {
      dispatch(branchAddError(error.message));
    });
};

export const editBranch = (name, address, id) => (dispatch, getState) => {
  dispatch(requestEditBranch());
  Axios.put(`https://staging-cohort-bank.herokuapp.com/api/branches/${id}/`, { name, address}, {
    headers: {
      authorization: `Bearer ${getState().auth.token}`
    }
  })
    .then(response => {
      dispatch(receiveEditBranch(response.data));
    })
    .catch(error => {
      dispatch(branchEditError(error.message));
    })
}

export const deleteBranch = id => (dispatch, getState) => {
  dispatch(requestDeleteBranch());
  Axios.delete(`https://staging-cohort-bank.herokuapp.com/api/branches/${id}/`, {
    headers: {
      authorization: `Bearer ${getState().auth.token}`
    }
  })
    .then(response => {
      dispatch(receiveDeleteBranch(id));
    })
    .catch(error => {
      dispatch(branchDeleteError());
    })
}