import { useEffect, useState } from "react";
// ? is it mandatory to have `useState` before `useEffect`: No
const UseEffectHooks = () => {
  const [name, setName] = useState("Ayman");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    document.title = `Celebrate ${name}`;
    console.log(`Name: ${name}`);
  }, [name]); // If I do not give [name]; this useEffect will trigger for every DOM change or rendeing of this page

  useEffect(() => {
    console.log(`Admin Boolean: ${admin}`);
  }, [admin]);

  return (
    <div>
      <h1>Use Effect</h1>
      <section>
        <h2> Congratulations {name} ! </h2>
        <button onClick={() => setName("Faizan")}>Change winner</button>
        <h2> {admin ? "Logged In" : "Not Logged In"} </h2>
        <button onClick={() => setAdmin(true)}>Set Admin</button>
      </section>
    </div>
  );
};

export default UseEffectHooks;
