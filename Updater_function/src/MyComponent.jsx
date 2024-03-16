/*  updater function = A function passed as an argument to setState() usaually
    ex.setYear(Update fun)
    :: Allow for safe updates based on the previous state
    :: Used with multiple state updates and asynchronous function
    :: Good practice to use updater functions
*/
import React,{useState} from "react";
function MyComponent(){
    const [count,setCount] = useState(0)
    function increment(){
        setCount(c=>c+1);
        // the code below will not give the correct result of increment
        // Because for optimization react  batches all update 
        // Together which is not fruitful for us
        
        setCount(count+1);
        setCount(count+1);
        setCount(count+1);
    }
    function decrement(){
        setCount(c=>c-1);
    }
    function reset(){
        // setCount(c=>c=0); will work correct
        setCount(c=>c=0);
    }
    return(
        <div>
            <p>{count}</p>
            <button onClick={increment}>Increament</button>
            <button onClick={decrement}>Decreament</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default MyComponent
