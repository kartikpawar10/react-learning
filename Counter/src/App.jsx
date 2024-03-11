/*React hook - Special function that allows functional Component to use
React features without writing class component (React V16.8)
(useState,useEffect,useContext,useReducer,useCallback,and more..)

useState() - A react hook allows the creation of  a stateful variable 
And a setter function to update its value in  the virtual dom
[name,setName]
*/

import MyComponent from "./MyComponent";
import Counter from "./Counter.jsx"
function App(){
  return (
    <>
    <Counter/>
    </>
  );
}

export default App