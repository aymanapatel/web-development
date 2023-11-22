import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import Header from "./Header";

import "./index.scss";

const App = () => (
  <div className="mx-auto max-w-6xl">
    <Header />
    <div className="my-10">Home Hero</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
