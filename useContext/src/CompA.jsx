// useContext : React Hook that allows you to share values
//         : between multiple levels of component without passing props
//         through each level

// Provider Component
/*  1. import {createContext} from 'react'
    2. export const MyContent = createContext();
    3. <MyContext.Provider value={value}>
            <Child/>
        </MyContext.Provider>
    */

// Provider Component
/*
    1.  import React,{useContext} from 'react'
        import {MyContext} from "./Component"
    2.  const value = useContext(MyContext)
*/

// Passing Props Level By Level known as : Prop Drilling
import CompB from "./CompB";
import React, { createContext, useState } from "react";
export const UserContext = createContext();
function CompA() {
  const [user, setUser] = useState("KartikOp");
  return (
    <div className="box">
      <h1>CompA</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <CompB user={user}/>
      </UserContext.Provider>
    </div>
  );
}
export default CompA;
