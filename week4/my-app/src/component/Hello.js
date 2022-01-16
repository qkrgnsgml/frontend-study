import World from "./World";

import styles from "./Hello.module.css"

export default function Hello(){
    return (
    <div>
        <h1 style={
            {
                color : '#f00',
            }
        }>Hello</h1>
        <World></World>
        <div className={styles.box}/>
    </div>
    );
}

// const Hello = function(){
//     <p>Hello</p>
// }

// export default Hello;

// const Hello = ()=>{
//     <p>Hello</p>
// }

// export default Hello;