import { useReducer } from "react";

const initialState = {
  message: "Blockchain"
};

function reducer(state, action) {
  switch (action.type) {
    case "BTC":
      return {
        message: "Proof of Work"
      };
    case "ETH":
      return {
        message: "Proof of Stake"
      };
    default:
      return {
        message: "Fiat Money FTW"
      };
  }
}

const UseReducerWithActions = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1> UseReducerWithActions </h1>
      <p> Message: {state.message}</p>
      <button onClick={() => dispatch({ type: "BTC" })}>BTC</button>
      <button onClick={() => dispatch({ type: "ETH" })}>ETH</button>
    </div>
  );
};

export default UseReducerWithActions;
