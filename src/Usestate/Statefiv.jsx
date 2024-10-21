//Checkbox (boolean) 

import { useState } from "react"

export default function Checkbox(){
    const[change,setChange]=useState(false);
    const fun=()=>{
       setChange(!change)
    }
    return(
        <div>
            <label>
        <input type="checkbox" checked="{change}" onChange={fun}></input>
        Fav Cricketer:-</label>
         <h2>My {change ?"Favourite":"Not Favourite"} Cricketer</h2>
        </div>
    )
} 