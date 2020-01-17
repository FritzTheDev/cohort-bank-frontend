import {
  GET_BRANCHES_ATTEMPT,
  GET_BRANCHES_SUCCESS,
  GET_BRANCHES_FAILURE,
  ADD_BRANCH_ATTEMPT,
  ADD_BRANCH_SUCCESS,
  ADD_BRANCH_FAILURE
} from "../actions/branch.actions";

const INITIAL_STATE = {
  loading: false,
  newBranchLoading: false,
  branches: [],
  error: null,
  addError: null
};

export const branchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_BRANCHES_ATTEMPT:
      return Object.assign({}, state, { loading: true });

    case GET_BRANCHES_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        branches: action.payload
      });

    case GET_BRANCHES_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.payload
      });

    case ADD_BRANCH_ATTEMPT:
      return Object.assign({}, state, { newBranchLoading: true, error: null });

    case ADD_BRANCH_SUCCESS:
      return Object.assign({}, state, {
        newBranchLoading: false,
        branches: [...state.branches, action.payload]
      });

    case ADD_BRANCH_FAILURE:
      return Object.assign({}, state, { addError: action.payload });

    default:
      return state;
  }
};
