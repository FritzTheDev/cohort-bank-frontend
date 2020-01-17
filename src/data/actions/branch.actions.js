import Axios from "axios";

export const GET_BRANCHES_ATTEMPT = "GET_BRANCHES_ATTEMPT";
export const GET_BRANCHES_SUCCESS = "GET_BRANCHES_SUCCESS";
export const GET_BRANCHES_FAILURE = "GET_BRANCHES_FAILURE";

const requestBranches = () => {
  return {
    type: GET_BRANCHES_ATTEMPT
  }
}

const recieveBranches = branches => {
  return {
    type: GET_BRANCHES_SUCCESS,
    payload: branches
  }
}

const branchesError = message => {
  return {
    type: GET_BRANCHES_FAILURE,
    payload: message
  }
}

export const getBranches = () => (dispatch, getState) => {
  dispatch(requestBranches());
  Axios.get('https://staging-cohort-bank.herokuapp.com/api/branches/', { headers: {
    authorization: `Bearer ${getState().auth.token}`
  }})
    .then(response => {
      dispatch(recieveBranches(response.data));
    })
    .catch(error => {
      console.log(error);
      dispatch(branchesError(error.message));
    });
}