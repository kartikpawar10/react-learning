import UserGreeting from "./UserGreeting.jsx";
// Condition - Rendering
const App = () => {
  return <>
  <UserGreeting isLoggedIn={true} username="Kartik"/>
  </>;
};

export default App