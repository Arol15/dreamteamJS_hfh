import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DonatePage from "./pages/DonatePage";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<<<<<<< HEAD
  
    <App />
 
=======
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="donate" element={<DonatePage />} />
        {/* <App /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
>>>>>>> 158679c8c3fae4f2ae432148d886752f61d57e74
);
