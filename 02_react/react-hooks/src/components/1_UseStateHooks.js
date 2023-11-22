import { useState, useCallback, react } from "react";
import { FaStar } from "react-icons/fa";

const UseStateHooks = () => {
  return (
    <div>
      <SimpleStatus />
      <br />
      <ToggableStatus />
      <br />
      <CheckboxChecked />
      <br />
      <StarRating totalStars={10} />
    </div>
  );
};

function SimpleStatus() {
  const [
    statusString, // string
    setStatus // function f
  ] = useState("Not Delivered"); // Make it deliverd

  return (
    <div>
      <h1>1. The status is: {statusString}</h1>
      <button onClick={() => setStatus("Delivered")}>
        1. Make it delivered
      </button>
    </div>
  );
}

function ToggableStatus() {
  const [isOn, toggleIsOn] = useToggle(); // Press me

  return (
    <div>
      <h1>
        2. Toggable status is:
        {isOn ? "Delivered" : "Not delivered"}
      </h1>
      <button onClick={toggleIsOn}>2. Press me</button>
    </div>
  );
}

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);
  return [value, toggle];
}

function CheckboxChecked() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <h1>3. Checkbox with useState</h1>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
      <p>{checked ? "checked" : "unChecked"}</p>
    </div>
  );
}

function StarRating({ totalStars }) {
  const [
    selectedStars, //
    setSelectedStars
  ] = useState(0);
  return (
    <div>
      <h1>Stars using Hooks</h1>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        Selected: {selectedStars} of {totalStars}
      </p>
    </div>
  );
}

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
}

const createArray = (length) => [...Array(length)];

export default UseStateHooks;
