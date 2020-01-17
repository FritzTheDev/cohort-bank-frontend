import { combineReducers } from "redux"

import { branchReducer } from "./branch.reducer";
import { authReducer } from "./auth.reducer";

export const rootReducer = combineReducers({
  branches: branchReducer,
  auth: authReducer,
});