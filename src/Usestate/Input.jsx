//Create a component with an input field that shows a live preview of the text entered.
// Requirements:
// •	Initialize state with an empty string.
// •	Update the state whenever the user types in the input field.
// •	Display the current value of the input below it.
// import { useState } from "react";
// export const Input=()=>{
//     const[entertext,setEnterText]=useState('');
//     const handle=(e)=>{
//         setEnterText(e.target.value);
//     }
//     return(
//         <div>
//             <label>Enter Your Text Here:-</label><br/>
//             <input type="text" value={entertext} onChange={handle}></input>
//             <h1>{entertext}</h1>
//         </div>
//     )
// }
