//props = read-only properties that are shared between components
// A parent component can send data to a child component 
//<Component Key=value/>

// default Prop
import Student from "./Student";
function App(){
  return (
    <>
    <Student name="Kartik" class="Third Year" rollNo={true}/>
    <Student name="Patrik" class="Third Year" rollNo={true}/>
    <Student name="Arsenick" class="Second Year" rollNo={false}/>
    <Student class="First Year"/>
    </>
  );
}

export default App;