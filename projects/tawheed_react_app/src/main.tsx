import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { CartProvider } from "./context/CartContext"; // Add this import

import "./styles/main.scss";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CartProvider>
        {" "}
        {/* Move CartProvider here */}
        <App />
      </CartProvider>
    </Provider>
  </React.StrictMode>
);
