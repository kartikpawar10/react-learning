import React,{useState} from 'react' 
function MyComponent(){
    // Returns an Array with 2 el(var,setter-function)
    // if we want to change the value of var (name)
    // we can use function(setName)
    let [name,setName] = useState("Guest");
    let [age,setAge] = useState(0)
    let [isEmployed,setIsEmployed] = useState(false) 
    const updateName = () =>{
        setName("Spongebob");
    }
    const incrementAge = () =>{
        setAge(age+2);
    }
    const toggleEmployedStatus = ()=>{
        
        setIsEmployed(!isEmployed)
    }
    return(<div>
        <p>Name:{name}</p>
        <button onClick={updateName}>Set Name</button>
        <p>Age:{age}</p>
        <button onClick={incrementAge}>Increment Number</button>
        <p>Is employed:{isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmployedStatus}>ToggleEmployee</button>
    </div>)
}

export default MyComponent