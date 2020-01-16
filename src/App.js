import React from "react";
import { Provider } from "react-redux";

import { store } from "./data/store";

export const App = () => {
  return <Provider store={store}></Provider>
}