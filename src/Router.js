import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import { Navigation } from "./components/Navigation";

import { BranchListPage } from "./pages/branch-list.page";
import { LoginPage } from "./pages/login.page";

export const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" render={() => <Redirect to="/login" />} />
      <Route path="/login" component={LoginPage} />
      <Route path="/branches" component={BranchListPage} />
    </BrowserRouter>
  );
};
