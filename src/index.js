import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </ChakraProvider>
  </BrowserRouter>
);
