import { combineReducers } from "redux"

import { branchReducer } from "./branch";

export const rootReducer = combineReducers({
  branches: branchReducer
});