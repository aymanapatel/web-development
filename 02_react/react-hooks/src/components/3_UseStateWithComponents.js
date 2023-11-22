import { useState } from "react";

const UseStateWithControlledComponents = () => {
  const [input, setInput] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (event) => {
    event.preventDefault(); // Prevent page from reloading
    alert(`${input} likes ${color} color`);

    // clear values after Submit event
    setInput("");
    setColor("#000000");
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          value={input}
          type="text"
          placeholder="Use Ref Example"
          onChange={(event) => setInput(event.target.value)}
        />
        <input
          value={input}
          type="color"
          onChange={(event) => setColor(event.target.value)}
        />
        <button>Ref Magic!</button>
      </form>
    </div>
  );
};

export default UseStateWithControlledComponents;
