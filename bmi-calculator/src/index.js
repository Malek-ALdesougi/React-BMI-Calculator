import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header.js";
import Fotter from "./footer.js";
import Form from "./form.js";
import Result from "./result.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <Form />
    <Result  />
    <Fotter />
  </>
);

