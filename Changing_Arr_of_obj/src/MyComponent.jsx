import React, { useState } from "react";
const MyComponent = () => {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar = () => {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCars((c) => [...c, newCar])
  };
  //   const handleRemoveCar = (i) => {};
  const handleYearChange = (e) => {
    setCarYear(new Date().getFullYear());
  };
  const handleMakeChange = (e) => setCarMake(e.target.value);
  const handleModelChanger = (e) => setCarModel(e.target.value);

  return (
    <>
      <div>
        <h2>List of Objects</h2>
        <ul>
          {cars.map((car, i) => (
            <li key={i}>
              {car.year} {car.make} {car.model}
            </li>
          ))}
        </ul>
        <input type="number" value={carYear} onChange={handleYearChange} />
        <br />
        <input
          type="text"
          value={carMake}
          onChange={handleMakeChange}
          placeholder="Enter car make"
        />
        <br />
        <input
          type="text"
          value={carModel}
          onChange={handleModelChanger}
          placeholder="Enter car model"
        />
        <br />
        <button onClick={handleAddCar}>Add Car</button>
      </div>
    </>
  );
};

export default MyComponent;
