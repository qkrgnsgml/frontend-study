
import './App.css';
import Hello from './component/Hello'
// import Welcome from './component/Welcome';
// import styles from './App.module.css';

function App() {
  return (
    <div className="App">  
    <Hello age={10}></Hello>
    <Hello age={20}></Hello>
    <Hello age={30}></Hello>
    </div>
  );
}

export default App;
//ver1
// function App() {
//   const name="Tom"
//   const user={
//     name:"Jane",
//     url:"https://naver.com",
//   }
//   return (
//     <div className="App">
//       <h1
//         style={{
//           color:"red",
//           backgroundColor: "green",
//         }}
//         >
//           Welcome, {name}
//           <p>{2+3}</p>
//           <p>{user.name}</p>
//         </h1>
//         <a href={user.url}>{user.name}</a>
//     </div>
//   );
// }

// export default App;
