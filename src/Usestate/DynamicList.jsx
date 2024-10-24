//Create a component that allows users to add items to a list.
// Requirements:
// •	Use a state to hold the list of items.
// •	Create an input field and a button to add items to the list.
// •	Display the list of items below the input field.

import { useState } from "react";
export const DynamicList=()=>{
    const[datalist,setDataList]=useState('')
    const[list,setList]=useState([]);
    const handle=(e)=>{
        setDataList(e.target.value);
    }
    const add=()=>{
        if(datalist.trim()){
    setList((prev)=>[...prev,datalist])
    setDataList('');
        }
    }
    return(
        <div>
            <input type="text" onChange={handle} value={datalist}/>
            <button onClick={add}>Add Items</button>
            {list.map((x,index)=>(
                <p key={index}>{x}</p>
            ))}
        </div>
    )
}