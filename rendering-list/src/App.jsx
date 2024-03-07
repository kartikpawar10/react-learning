import List from "./List.jsx";

const App = () => {
  const fruits = [
    { id: 1, name: "apple", calories: "apples" },
    { id: 2, name: "orange", calories: 14 },
    { id: 3, name: "banana", calories: 174 },
    { id: 4, name: "coconut", calories: 344 },
    { id: 5, name: "pineapple", calories: 299 },
  ];
  const veg = [
    { id: 6, name: "tomato", calories: 87 },
    { id: 7, name: "brinjal", calories: 15 },
    { id: 8, name: "peas", calories: 44 },
    { id: 9, name: "celary", calories: 35 },
    { id: 10, name: "carrots", calories: 239 },
  ];
  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
      {veg.length > 0 && <List items={veg} category="Vegetables" />}
    </>
  );
};

export default App;
