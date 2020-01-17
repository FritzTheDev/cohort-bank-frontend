import {
  GET_BRANCHES_ATTEMPT,
  GET_BRANCHES_SUCCESS,
  GET_BRANCHES_FAILURE,
  ADD_BRANCH_ATTEMPT,
  ADD_BRANCH_SUCCESS,
  ADD_BRANCH_FAILURE,
  EDIT_BRANCH_ATTEMPT,
  EDIT_BRANCH_SUCCESS,
  EDIT_BRANCH_FAILURE,
  DELETE_BRANCH_ATTEMPT,
  DELETE_BRANCH_SUCCESS,
  DELETE_BRANCH_FAILURE,
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

    case EDIT_BRANCH_ATTEMPT:
      // add spinner handling
      return state;
    
    case EDIT_BRANCH_SUCCESS:
      const otherBranches = state.branches.filter(branch => {
        return branch.id !== action.payload.id
      });
      return Object.assign({}, state, { branches: [...otherBranches, action.payload ]});

    case EDIT_BRANCH_FAILURE:
      // Add error handling
      return state;
    
    case DELETE_BRANCH_ATTEMPT:
      // Add Spinner Handling
      return state;

    case DELETE_BRANCH_SUCCESS:
      return Object.assign({}, state, { branches: state.branches.filter(branch => {
        return !(branch.id === action.payload)
      })})

    case DELETE_BRANCH_FAILURE:
      // Add error handling if needbe
      return state

    default:
      return state;
  }
};
