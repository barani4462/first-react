//day 1:

import CompB from "./componenets/CompB";

// components - functional componenets and class componenets
// functional componenets is the preferred way to create components in React 

// import Greating from "./componenets/Greating";
// function App() {
//   //  const loggedInUser = {
//   //   name: 'barani',
//   //   email: 'barani@gmail.com',
//   //  };
//   function dataFromChild(name, email) {
//     console.log(name, email);
//   }
  
//   return (
//  <>
//  {/* <Greating loggedInuser={loggedInUser}/> */}
//   <Greating 
//   dataFromChild={dataFromChild}
//   />
//   </>
  
//   )
// }

// export default App;

// Day 3:


function App() {

  const message = "React is Awesome";
  return <CompB 
  message={message}
  />
}

export default App;

















// Day 2:
 
// import compB from "./components/compB";

// function App() {
//   return <compB />
// }

// export default App;

// import React from "react";

// class App extends React.Component {
//   render() {
//     return <h1>Class Component in React</h1>
//   }
// }

// export default App;


// import { useState} from "react";
/*
State --> State is a value that can change over time.
-State is used to store data that can 
*/
// function App() {
// const [count,setCount] = useState(0);

//     const handleIncrease = (args) => {
//       setCount(count + 1);
//       console.log('Count increase:', count);
//       console.log('Arguments:', args)
//   }

//     const handledecrease = (args) => {
//       setCount(count - 1);
//       console.log('Count decrease:',count);
//       console.log('Arguments:', args)
//     }

//      const handlereset = (args) => {
//       setCount(count );
//       console.log('Count reset:',count);
//       console.log('Arguments:', args)
//     }



//   return (
//     <>
//     <h1>Counter: {count}</h1>
//     <button onClick={() => handleIncrease('hello')}>increase</button>
//     <button onClick={() => handledecrease('hai')}>decrease</button>
//     <button onClick={() => setCount(0)}>Reset</button>
//    </>
//   )
// }

// function App() {

//   const [likes, setLikes] = useState(0);
//   const [dislikes, setDislikes] = useState(0);

//   const handleLike = () => {
//     setLikes(likes + 1);
//   }

//   const handleDislike = () => {
//     setDislikes(dislikes + 1);
//   }

//   return (
//     <>
//       <button onClick={handleLike}>Like {likes}</button> <button onClick={handleDislike}>Dislike {dislikes}</button>
//     </>
//   )
// }


// function App() {

//   const [reaction, setReaction] = useState(0);
  

//   const handleLike = () => {
   
//   }

//   const handleDislike = () => {
   
//   }

//   return (
//     <>
//       <button onClick={handleLike}>Like {reaction.likes}</button> 
//       <button onClick={handleDislike}>Dislike {rea}</button>
//     </>
//   )
// }


// function App() {

//   const [reactions, setReactions] = useState({
//     likes: 0,
//     dislikes: 0
//   });

//   console.log(reactions);

//   const handleLike = () => {
//     setReactions({
//       ...reactions, likes: reactions.likes + 1
//     });
//   }

//   const handleDislike = () => {
//     setReactions({
//       ...reactions, dislikes: reactions.dislikes + 1
//     });
//   }

//   return (
//     <>
//       <button onClick={handleLike}>Like {reactions.likes}</button> <button onClick={handleDislike}>Dislike {reactions.dislikes}</button>
//     </>
//   )
// }

// export default App;

/*
    
*/

// import { useEffect, useState } from "react";

// const App = () => {

//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     fetch(`https://685ac3af9f6ef9611157b188.mockapi.io/todos`)
//       .then(response => response.json())
//       .then(data => setTodos(data))
//   }, []);

//   return (
//     <div>
//       <h1>Todos</h1>
//       <ul>
//         {
//           todos.map(todo => {
//             // return <li key={todo.id}>{todo.content}</li>;
//             return <li key={todo.id}>{todo.content}</li>
//           })
//         }
//       </ul>
//     </div>
//   )
// }

// export default App;

