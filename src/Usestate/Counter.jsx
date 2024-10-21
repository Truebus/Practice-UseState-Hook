//Create a counter component that increments and decrements a count. Use the useState hook to manage the count value.
// Include buttons for incrementing, decrementing, and resetting the count to zero.
// import { useState } from "react";
// export const Counter=()=>{
//     const[count,setCount]=useState(0);
//     const incre=()=>{
//         setCount(previous=>previous+1);
//     }
//     const decre=()=>{
//         setCount(previous=>previous-1);
//     }
//     return(
//         <div>
//             <div>
//                 <h1>{count}</h1>
//             </div>
//     <button type="button" className="btn-one" onClick={incre}>Increment</button>
//     <button type="button" className="reset" onClick={()=>setCount(0)}>Reset</button>
//     <button type="button" className="btn-two" onClick={decre}>Decrement</button>
//         </div>
//     )
// }