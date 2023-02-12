import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </ChakraProvider>
  </BrowserRouter>
);
