import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import UseStateHooks from "./components/1_UseStateHooks";
import UseEffectHooks from "./components/2_UseEffectHooks";
import UseEffectWithDataHooks from "./components/2_UseEffectWithDataHooks";
import UseReducer from "./components/3_UseReducer";
import UseReducerWithActions from "./components/3_UseReducerWithActions";
import UseRef from "./components/3_UseRef";
import UseStateWithControlledComponents from "./components/3_UseStateWithComponents";
import CustomHook from "./components/4_CustomHook";
import CustomHookWithContext from "./components/4_UseContext";
import UseFetchParent from "./components/4_UseFetchParent";

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/useState">1. Use State</Link>
        </li>
        <li>
          <Link to="/useEffect">2. Use Effect</Link>
        </li>
        <li>
          <Link to="/useEffectWithData">2. Use Effect With Data</Link>
        </li>
        <li>
          <Link to="/useReducer">3. Use Reducer</Link>
        </li>
        <li>
          <Link to="/useReducerWithActions">3. Use Reducer With Actions</Link>
        </li>
        <li>
          <Link to="/useRef">3. Use Ref</Link>
        </li>
        <li>
          <Link to="/useStateWithComponents">
            3. Use State With Controlled Components TODO
          </Link>
        </li>
        <li>
          <Link to="/customHook">4. Custom hook for 3_UseRef</Link>
        </li>
        <li>
          <Link to="/customHookWithContext">
            4. Custom hook for 3_UseRef With Context
          </Link>
        </li>
        <li>
          <Link to="/customFetchHook">
            4. Custom Fetch Hook with Github API
          </Link>
        </li>
      </ul>

      <hr />

      <Route path="/useState" component={UseStateHooks} />
      <Route path="/useEffect" component={UseEffectHooks} />
      <Route path="/useEffectWithData" component={UseEffectWithDataHooks} />
      <Route path="/useEffectWithData" component={UseEffectWithDataHooks} />
      <Route path="/useReducer" component={UseReducer} />
      <Route path="/useReducerWithActions" component={UseReducerWithActions} />
      <Route path="/useRef" component={UseRef} />
      <Route
        path="/useStateWithComponents"
        component={UseStateWithControlledComponents}
      />
      <Route path="/customHook" component={CustomHook} />
      <Route path="/customHookWithContext" component={CustomHookWithContext} />
      <Route path="/customFetchHook" component={UseFetchParent} />
    </div>
  </Router>
);

render(<BasicExample />, document.getElementById("root"));
