function Greeting(props) {

  const name = 'Barani';
  const email = 'barani@gmail.com';

  props.datafromChild(name, email);
  return (
   <>
     <h1>hello {name}!</h1>
     <p>Your Logged in using {email}</p>
     
   </>
  )
}

export default Greeting;