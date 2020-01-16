import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { store } from "./data/store";
import { BranchListPage } from "./pages/branch-list.page";

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={BranchListPage} />
      </Router>
    </Provider>
  );
};
