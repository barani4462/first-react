// components - functional components and class components
// functional components is the prepared way to creare components in react 
import Greeting from "./components/Greeting";
function App() {
 
  const loggedInUser = 'Barani';

  return (
    <>
       <Greeting loggedInUser={loggedInUser} />
      
    </>
  
  )
}

export default App;