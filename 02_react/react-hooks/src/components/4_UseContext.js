import { createContext, useContext } from "react";
import ReactDOM from "react-dom";

export const TreesContext = createContext();

export const useTress = () => useContext(TreesContext);

const trees = [
  { id: "1", type: "Maple" },
  { id: "2", type: "Family" },
  { id: "3", type: "Oak" }
];

function App() {
  const { trees } = useTress();

  return (
    <div>
      <h1> Use Context App: Trees I have Heard of</h1>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>{tree.type}</li>
        ))}
      </ul>
    </div>
  );
}

const CustomHookWithContext = () => {
  return (
    <div>
      <TreesContext.Provider value={{ trees }}>
        <App />
      </TreesContext.Provider>
    </div>
  );
};

export default CustomHookWithContext;
