import { combineReducers } from "redux"

import { branchReducer } from "./branch.reducer";

export const rootReducer = combineReducers({
  branches: branchReducer
});