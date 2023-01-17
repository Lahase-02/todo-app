import { useState } from 'react';
import './Counter.css'
import CountButton from './CounterButton'
export default function Counter(){
    //eslint-disable-next-line
    const [count, setCount] = useState(0);
    function incrementCounterParentFunction(by) {
        setCount(count + by)
    }
    function decrementCounterParentFunction(by) {
        setCount(count - by)
    }
    function resetCounter() {
        setCount(0)
    }

    return (
   
    <>
    <span className="count">{count}</span>
      <CountButton by={1} incrementMethod={incrementCounterParentFunction} 
      decrementMethod={decrementCounterParentFunction}/>
      <CountButton by={2}incrementMethod={incrementCounterParentFunction}
      decrementMethod={decrementCounterParentFunction}/>
      <CountButton by={5}incrementMethod={incrementCounterParentFunction}
      decrementMethod={decrementCounterParentFunction}/>
         <button className="counterButton" 
                        onClick={resetCounter}
                >reset</button>
      </>
      
    )
}



 