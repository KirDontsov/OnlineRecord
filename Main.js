import * as React from "react";
import { Provider } from "react-native-paper";

import App from "./src/App";

import React from "react";

const Main = () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};

export default Main;
