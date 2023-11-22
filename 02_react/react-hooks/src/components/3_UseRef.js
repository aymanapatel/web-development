import { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef();
  const colorRef = useRef();

  const submit = (event) => {
    event.preventDefault(); // Prevent page from reloading
    const inputVal = inputRef.current.value;
    const colorVal = colorRef.current.value;
    alert(`${inputVal} likes ${colorVal} color`);

    // clear values after Submit event
    inputRef.current.value = "";
    colorRef.current.value = "";
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input ref={inputRef} type="text" placeholder="Use Ref Example" />
        <input ref={colorRef} type="color" />
        <button>Ref Magic!</button>
      </form>
    </div>
  );
};

export default UseRef;
