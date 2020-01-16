import { LOGIN_ATTEMPT, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/auth.actions";

const INITIAL_STATE = {
  loggingIn: false,
  isAuthenticated: false,
  token: null,
  error: null
}

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_ATTEMPT:
      return Object.assign({}, state, { loggingIn: true });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, { loggingIn: false, isAuthenticated: true, token: action.payload });
    case LOGIN_FAILURE:
      return Object.assign({}, state, { loggingIn: false, isAuthenticated: false, token: null, error: action.payload });
    default:
      return state;
  }
}