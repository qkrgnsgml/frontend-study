//import styles from "./Hello.module.css"
import { useState } from "react";

export default function Hello({age}){
    //let name="Mike";
    
    const [name, setName] = useState('Mike');
    const [age2, setAge] = useState(age);

    function changeName(){
        const newName=name==="Mike" ? "jane" : "Mike";
        console.log(name);
        setName(newName)
        setAge(age2+1);
    }
    return (
    <div>
        <h1>Hello</h1>
        <h2>{name}({age2}세)</h2>
        <button onClick={changeName}>Change</button>
    </div>
    );
}

//state
// //import styles from "./Hello.module.css"
// import { useState } from "react";

// export default function Hello(){
//     //let name="Mike";
//     const [name, setName] = useState('Mike');

//     function changeName(){
//         const newName=name==="Mike" ? "jane" : "Mike";
//         console.log(name);
//         setName(newName)
//     }
//     return (
//     <div>
//         <h1>Hello</h1>
//         <h2>{name}</h2>
//         <button onClick={changeName}>Change</button>
//     </div>
//     );
// }

//이벤트 처리
// import styles from "./Hello.module.css"

// export default function Hello(){
//     function showName(){
//         console.log('123');
//     }
//     function showText(e){
//         console.log(e.target.value);
//     }

//     return (
//     <div>
//         <h1>Hello</h1>
//         <button onClick={showName}>Show name</button>
//         <button>Show age</button>
//         <input type="text" onChange={showText}/>
//         <div className={styles.box}/>
//     </div>
//     );
// }

// const Hello = function(){
//     <p>Hello</p>
// }

// export default Hello;

// const Hello = ()=>{
//     <p>Hello</p>
// }

// export default Hello;