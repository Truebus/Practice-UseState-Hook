//Create a component that allows users to pick a color and displays the selected color.
// Requirements:
// •	Use a state to hold the selected color.
// •	Initialize the state with a default color (e.g., "red").
// •	Create a dropdown or a set of buttons for different colors.
// •	Display a box filled with the selected color.
import { useState } from "react";
export const Pick=()=>{
    const[color,setColor]=useState('red');
    const colors=[{id:1,color:"blue"},{id:2,color:"black"},{id:3,color:"green"},{id:4,color:"yellow"}];
    const handle=(e)=>{
        setColor(e.target.value)
    }
    return(
        <div>
            <div style={{height:"400px",width:"400px",border:"3px solid black",backgroundColor:color}}>
                <select onChange={handle}>
            {colors.map((x)=>(
                <option key={x.id} value={x.color}>{x.color}</option>
            ))}
                </select>
            </div>
        </div>
    )
}
