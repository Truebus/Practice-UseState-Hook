// Create a toggle switch to switch between light and dark mode.
// Requirements:
// •	Use a boolean state to track the current mode (light or dark).
// •	Initialize the state to false (light mode).
// •	Change the background color of the component based on the mode.
// •	Include a button to toggle between light and dark modes.
import { useState } from "react"
export const Toggle=()=>{
    const[change,setChange]=useState(false);
    const changecolor=change?"black":"white"
    const handle=()=>{
        setChange((prev)=>!prev);
    }
    return(
        <div style={{height:"400px", width:"400px",border:"2px solid black",backgroundColor:changecolor}}>
            <h1>Toggle Switch</h1>
            <button onClick={handle}>{change? "Black" :"White"}</button>
        </div>
    )
}
