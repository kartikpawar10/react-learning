import React, { useState } from "react";

function MyComponent() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
  function handleAddFood(e) {
    const newFood = document.getElementById("foodInput").value;
    console.log(newFood);
    document.getElementById("foodInput").value = "";
    if (newFood.length > 0) {
      setFoods((f) => [...f, newFood]);
    }
  }
  function handleRemoveFood(index) {
    setFoods(foods.filter((_,i)=>i!==index))
  }
  return (
    <div>
      <h2>List of food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={()=>handleRemoveFood(index)}>{food}</li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food Name" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}

export default MyComponent;
