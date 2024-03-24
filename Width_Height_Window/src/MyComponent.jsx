import React,{useEffect,useState} from "react";

function MyComponent(){
    const[width,setWidth] = useState(window.innerWidth)
    const[height,setHeight] = useState(window.innerHeight)

    function handleResize(){
        setWidth(window.innerHeight)
        setHeight(window.innerWidth)
    }

    return(<>
    <p>Window Height : {height}px</p>
    <p>Window Width : {width}px</p>
    </>)
} 

export default MyComponent