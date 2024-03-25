import React from "react";
import { UserContext } from "./CompA";
import { useContext } from "react";
function CompD() {
  const user = useContext(UserContext)
  return (
    <div className="box">
      <h1>CompD</h1>
      <h2>{`Bye ${user}`}</h2>
    </div>
  );
}
export default CompD;
