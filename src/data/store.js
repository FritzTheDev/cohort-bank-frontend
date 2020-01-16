import { createStore, applyMiddleware } from "redux";
import Thunk from "redux-thunk";

import { rootReducer } from "./reducers";

export const store = createStore(rootReducer, applyMiddleware(Thunk));