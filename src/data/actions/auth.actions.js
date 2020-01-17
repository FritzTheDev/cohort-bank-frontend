import Axios from "axios";

export const LOGIN_ATTEMPT = "LOGIN_ATTEMPT";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

const requestLogin = () => {
  return { type: LOGIN_ATTEMPT }
}

const recieveLogin = token => {
  return { type: LOGIN_SUCCESS, payload: token }
}

const loginError = message => {
  return { type: LOGIN_FAILURE, payload: message }
}

export const login = (username, password) => dispatch => {
  dispatch(requestLogin());
  Axios.post("https://staging-cohort-bank.herokuapp.com/api/token/", { username, password })
    .then(res => {
      dispatch(recieveLogin(res.data.access));
    }).catch(error => {
      dispatch(loginError(error.message));
    })
}