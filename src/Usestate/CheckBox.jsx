//Create a component that allows users to select multiple options using checkboxes.
// Requirements:
// •	Use an array state to hold selected options.
// •	Initialize the state as an empty array.
// •	Create checkboxes for a few options (e.g., fruits).
// •	Update the state when checkboxes are checked or unchecked.
import { useState } from "react";
export const CheckBox=()=>{
    const[choose,setChoose]=useState([]);
    const options=[{id:1,cricketer:"Virat Kholi"},{id:2,cricketer:"Ben Stokes"},
        {id:3,cricketer:"Rohit Sharma"},{id:4,cricketer:"Jasprit Bummrah"},{id:5,cricketer:"Pat Cummies"}
    ]
    const handleoptions=(e)=>{
        const value=e.target.value;
        const checked=e.target.checked;
        if(checked){
            setChoose((prev)=>[...prev,value]);
        }else{
            setChoose((prev)=>prev.filter((x)=>x!==value))
        }
    }
    return(
        <div>
            <h4>Allow the Users to select multiple options (using CheckBox)</h4>
        {options.map((x,index)=>(
            <div key={index}>
                <input type="checkbox" onChange={handleoptions} value={x.cricketer}
                checked={choose.includes(x.cricketer)}/>{x.cricketer}
            </div>
        ))}
        <div>
        <p>{choose.join(",")}</p>
        </div>
        </div>
    )
}