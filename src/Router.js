import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Navigation } from "./components/Navigation";

import { BranchListPage } from "./pages/branch-list.page";
import { HomePage } from "./pages/home.page";
import { LoginPage } from "./pages/login.page";

export const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/branches" component={BranchListPage} />
    </BrowserRouter>
  );
};
