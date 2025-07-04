function Greeting(props) {

    console.log(props);

  return (
   <>
     <h1>hello {props.loggedInUser}! </h1>
     <p>This is my first components</p>
     
   </>
  )
}

export default Greeting;