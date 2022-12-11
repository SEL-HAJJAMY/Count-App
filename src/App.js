import { useState } from "react";
import './index.css';

function App() {

  // State to store count value
  const [count, setCount] = useState(0);

  // Function to increment count by 1
  const incrementCount = () => {

    // Update state with incremented value
    setCount(count + 1);
  };

  // Function to decrement count by 1
  const decrementCount = () => {
    
    // Update state with decremented value
    setCount(count - 1);
    

  };
 
  return (
    <div className="App">
      <div className="count" style={{color: count > 0 ? '#3388ff' : count < 0 ? 'red' : 'black'}}>{count}</div>
      <div>
        <button className="decreaseBtn" onClick={decrementCount}>-</button> 
        <button className="increaseBtn" onClick={incrementCount}>+</button> 
      </div>
     
    </div>
    
  );
}

export default App;
