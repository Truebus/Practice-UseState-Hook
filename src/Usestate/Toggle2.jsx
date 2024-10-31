// Build a toggle component that switches between "ON" and "OFF" 
//states when a button is clicked. Display the current state on the screen.

import { useState } from "react"
export const Toggle=()=>{
    const[toggle,setToggle]=useState(false);
    const handle=()=>{
        setToggle(pre=>!pre)
    }
    return(
        <div>
            <h1> toggle component that switches between "ON" and "OFF" </h1>
            <button onClick={handle}>Click ME</button>
        <h3>{toggle ?"off":"on"}</h3>
        <h2>{toggle?"on":"off"}</h2>
        </div>
    )
}