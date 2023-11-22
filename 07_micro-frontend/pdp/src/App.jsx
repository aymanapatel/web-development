import React, { useState } from "react";
import ReactDOM from "react-dom";

import ErrorBoundary from "./ErrorBoundary";

/* Remote Components from `home` */
import Footer from "home/Footer";
const Header = React.lazy(() => import("home/Header"));

import "./index.scss";

const App = () => {
  const [load, setLoad] = useState(false);

  return (
    <div className="mx-auto max-w-6xl">
      {load && (
        <React.Suspense fallback={<div> Loading ...</div>}>
          <ErrorBoundary>
            <Header />
          </ErrorBoundary>
        </React.Suspense>
      )}
      <button onClick={() => setLoad(true)}>Load External Header</button>
      <div className="my-10">PDP Hero</div>
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
