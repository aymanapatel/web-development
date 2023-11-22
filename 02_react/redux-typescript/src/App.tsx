import React, { useState } from "react";
import redux from "./images/redux.svg"
import vite from "./images/vite.svg"
import "./App.css";

import { useAppDispatch, useAppSelector } from "./app/hooks";
import { incremented, amountAdded } from "./features/counter/counter-slice";

import { useFetchBreedsQuery } from "./features/dogs/dogs-slice";

function App() {

  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const [numDogs, setNumDogs] = useState(10);
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);


  function handleClick() {

    // increment by 1
    // dispatch(incremented()) // Dispatch `incremented()` action defined in `counter-slice`
    
    // increment by fixed amount
    dispatch(amountAdded(3));
  }


  return (
    <div className="App">
      <header className="App-header">
        
        <h2> Built using</h2>

        <div>
          <img src={redux} alt="logo" width="100px" height="100px"/>
          &
          <img src={vite} alt="logo" width="100px" height="100px"/>
        </div>


      </header>


        <hr style={{border: "1px dashed red"}}/>
        <div className="App-header">
        <p>
          <button onClick={handleClick}>
            count is: {count}
          </button>
        </p>

        <div>
          <p>Dogs to fetch:</p>
          <select value={numDogs} onChange={(e) => setNumDogs(Number(e.target.value))}>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div>

        
        <div>
          <p> Number of dogs: {data.length}</p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {data.map((breed) => (
                  <tr key={breed.id}>
                    <td>{breed.name}</td>
                    <td><img src={breed.image.url} alt={breed.name} height="200px"/></td>
                  </tr>
                ))
              }
              
              
            </tbody>
          </table>

        </div> 
        </div>
 
    </div>
  );
}

export default App;
