import React from "react";
import { Provider } from "react-redux";

import { store } from "./data/store";
import { Router } from "./Router";

export const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)