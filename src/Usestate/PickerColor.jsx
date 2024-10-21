//Build a color picker component that allows users to select a color from a palette. 
//Use the useState hook to store the currently selected color and display it as the background color of a box.
import { useState } from "react"
export const ColorPicker=({selectcolor})=>{
    const[pick,setPick]=useState(selectcolor[0].selectcolor);//we can empty
    const handle=(e)=>{
        setPick(e.target.value)
    }

    return(
        <div style={{ width: '100px',
            height: '100px',
            backgroundColor: pick,
            marginTop: '10px',
            border: '1px solid black'}}>
    <select value={pick} onChange={handle}>
    {selectcolor.map((color) => (
                    <option key={color.id} value={color.color}>
                        {/* {color.color.charAt(0).toUpperCase() + color.color.slice(1)} */}
                        {color.color.slice(0)}
                    </option>
                ))}
    </select>
        </div>
    )
}