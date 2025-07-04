// components - functional components and class components
// functional components is the prepared way to creare components in react 
import Greeting from "./components/Greeting";
function App() {
 
   function datafromChild(name, email) {
    console.log(name, email);
   }
  return (
    <>
       <Greeting 
          datafromChild={datafromChild}
       />
      
    </>
  
  )
}

export default App;