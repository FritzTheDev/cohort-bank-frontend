import { GET_BRANCHES_ATTEMPT, GET_BRANCHES_SUCCESS, GET_BRANCHES_FAILURE } from "../actions/branch.actions";

const INITIAL_STATE = {
  loading: false,
  branches: [],
  error: null
}

export const branchReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_BRANCHES_ATTEMPT:
      return Object.assign({}, state, { loading: true });

    case GET_BRANCHES_SUCCESS:
      return Object.assign({}, state, { loading: false, branches: action.payload });

    case GET_BRANCHES_FAILURE:
      return Object.assign({}, state, { loading: false, error: action.payload });
      
    default:
      return state
  }
}