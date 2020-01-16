import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { store } from "./data/store";

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={} />
      </Router>
    </Provider>
  );
};
