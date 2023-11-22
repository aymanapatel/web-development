import { useReducer } from "react";

const UseReducer = () => {
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,
    0
  );

  return (
    <div>
      <h1> Use Reducer </h1>
      <h2 onClick={() => setNumber(1)}> {number} </h2>
      <hr />
      <h2> Refactoring CheckboxChecked() in 1_UseStateHooks.js </h2>
      <CheckboxCheckedWithReducer />
    </div>
  );
};

function CheckboxCheckedWithReducer() {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <div>
      <h1>3. Checkbox with useReducer</h1>
      <input type="checkbox" value={checked} onChange={toggle} />
      <p>{checked ? "checked" : "unChecked"}</p>
    </div>
  );
}
export default UseReducer;
