/*
useEffect() -> React Hook that Tells react DO some CODE when (Pick One):
This component re-renders
This component mounts
This state of a Value

mount - adding a component to a DOM
unmount - removing a component from the DOM
 
1. useEffect(()=>{})  Runs after every re-render
2. useEffect(()=>{},[])  Runs only on mount
3. useEffect(()=>{},[value]) Runs on mount + when value changes

Uses
#1 Event Listener 
#2 DOM Manipulation
#3 Subscription
#4 Fetching Data from an Api
#5 Clean Up when a component unmounts
*/

import React,{useEffect, useState} from "react";

function MyComponent(){

    const[count,setCount] = useState(0);
    const[color,setColor] = useState("green");
    function addCount(){
        setCount(c=>c+1)
    }
    function subCount(){
        setCount(c=>c-1)
    }
    function changeColor(){
        setColor(c=>c==="green"?"red":"green");
    }
    useEffect(()=>{ 
        document.title = `Count:${count} ${color}`
    },[count,color]) // Add [] this Empty arr of Dep help to not change the
    // my title every time a click on count
    return(<>
        <p style={{color:color}}>Count:{count} {color}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subCount}>Sub</button>
        <button onClick={changeColor}>Change Color</button>
    </>)
}

 export default MyComponent;