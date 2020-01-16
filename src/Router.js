import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { BranchListPage } from "./pages/branch-list.page";
import { Navigation } from "./components/Navigation";

export const Router = () => {
  return (
      <BrowserRouter>
        <Navigation />
        <Route path="/branches" component={BranchListPage} />
      </BrowserRouter>
  );
};
