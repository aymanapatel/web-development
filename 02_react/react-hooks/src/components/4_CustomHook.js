import { useState } from "react";

const CustomHook = () => {
  const [inputProps, resetInput] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (event) => {
    event.preventDefault(); // Prevent page from reloading

    alert(`${inputProps.value} likes ${colorProps.value} color`);

    // clear values after Submit event
    resetInput("");
    resetColor("#000000");
  };
  return (
    <div>
      <form onSubmit={submit}>
        <input
          {...inputProps} // JSX Spread Seperator
          type="text"
          placeholder="Use Ref Example"
        />
        <input
          {...colorProps} // JSX Spread Seperator
          type="color"
        />
        <button>Cusom Hook Ref Magic!</button>
      </form>
    </div>
  );
};

function useInput(intialValue) {
  const [value, setValue] = useState(intialValue);

  return [
    {
      value,
      onChange: (event) => setValue(event.target.value)
    },
    () => setValue(intialValue)
  ];
}

export default CustomHook;
