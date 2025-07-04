// components - functional components and class components
// functional components is the prepared way to creare components in react 
import Greeting from "./components/Greeting";
function App() {
 
  const name = 'Barani';
  const email = 'barani@gmail.com';

  return (
    <>
       <Greeting name={name} email={email} />
      
    </>
  
  )
}

export default App;