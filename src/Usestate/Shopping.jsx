// Create a simple shopping cart component where users can add or remove items.
// Requirements:
// •	Use an array state to hold the items in the cart.
// •	Initialize the cart with a few items.
// •	Create buttons to add and remove items (e.g., "Add Item" and "Remove Item").
// •	Display the current items in the cart.
import { useState } from "react";
export const Shopping=()=>{
    const[storeitems,setStoreItems]=useState([]);
    const[values,setValues]=useState('');
    const handlechange=(e)=>{
        setValues(e.target.value);
    }
    const handleitems=()=>{
        if(values.trim()){
            setStoreItems([...storeitems,values]);
            setValues('');
        }
    }
    const del=(index)=>{
      setStoreItems(pre=>pre.filter((_,i)=>i!==index));
    }
    return(
        <div>
            <label>Enter the Items</label><br/>
            <input type="text" onChange={handlechange} value={values}></input>
            <button onClick={handleitems}>Add Items</button>
            {storeitems.map((x,index)=>(
                <div key={index}>
                <h1>{x}</h1>
                <button onClick={()=>del(index)}>Delete Items</button>
                </div>
            ))}
        </div>
    )
}