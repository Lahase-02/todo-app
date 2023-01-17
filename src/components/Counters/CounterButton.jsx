import { useState } from 'react';
import './Counter.css'
 export default function CountButton({by,incrementMethod,decrementMethod}) {
    const [count, setCount] = useState(0);
    function incrementButtonfunction() {
        setCount(count + by);
        console.log(count);
        console.log(count);
        incrementMethod(by);
        
    }
    function decrementButtonfunction() {
       setCount(count - by);
       
       decrementMethod(by);
    }
    
    return (
        <div className="Counter">
         
            <div>
                <button className="counterButton" 
                        onClick={incrementButtonfunction}
                >+{by}</button>
                <button className="counterButton" 
                        onClick={decrementButtonfunction}
                >-{by}</button>
                 </div>
                
        </div>
        
    );
}
