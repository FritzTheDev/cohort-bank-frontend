import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { store } from "./data/store";

import { BranchListPage } from "./pages/branch-list.page";

import { Navigation } from "./components/Navigation";

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Route path="/branches" component={BranchListPage} />
      </Router>
    </Provider>
  );
};
