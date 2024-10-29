// Build a countdown timer that counts down from a specified number of seconds.
// Requirements:
// •	Use state to hold the countdown time.
// •	Initialize the state with a default value (e.g., 10 seconds).
// •	Display the countdown and update it every second until it reaches 0.
// •	Include a button to start the countdown.
import { useEffect, useState } from "react"
export const Timer = () => {
    const[holdtime,setHoldTime]=useState(10);
    const[isactive,setIsActive]=useState(false);
    useEffect(()=>{ 
        let a;
        if( isactive && holdtime>0){
        a=setInterval(()=>{
            setHoldTime((prev)=>prev-1);
        },1000)
        }
        else if(holdtime===0){
            setIsActive(false);
        }
    return()=>
       clearInterval(a);
    
},[isactive,holdtime])
const active=()=>{
    setIsActive(true)
}
  return (
    <div>
        <h1>
        countdown timer that counts down from a specified number of seconds.
        </h1>
  <button onClick={active} disabled={isactive}>Countdown {holdtime}</button>
  <p>{holdtime>0?"continue":"times up"}</p>
    </div>
  )
}
