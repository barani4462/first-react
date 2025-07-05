function Greating() {

    let num1 = 10;
    let num2 = 8;

    // let sum = num1 + num2;
    let add = () => num1 + num2;
  return (
  <>
     <h1>Hellow,world!</h1>
    <p>This is my first componenets</p>
    {/* <p>The sum of num1 and num2 { sum }</p> */}
    <p>The sum {num1} and {num2} is {add()}</p>

   </>
  )
}

export default Greating;