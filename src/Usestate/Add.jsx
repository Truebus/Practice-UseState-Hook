//Implement a component that allows users to add items to a list. Use the useState 
//hook to manage the list of items. Include an input field to enter new items and a button to add them to the list.
import { useState } from "react";
export const Add=()=>{
    const[storevalue,setStorevalue]=useState([]);
    const[txtvalue,setTxtvalue]=useState('');
    const inputtxt=(e)=>{
        setTxtvalue(e.target.value)
    }
    const addhandle=()=>{
        if(txtvalue.trim()){
            setStorevalue([...storevalue,txtvalue]);
            setTxtvalue('');
        }
    }
    return(
        <div>
            <input type="text" onChange={inputtxt}></input>
            <button type="button" onClick={addhandle}>Add Items</button>
            <div>
                {storevalue.map((x,index)=>(
                    <h1 key={index}>{x}</h1>
                    
                ))}
            </div>
        </div>
    )
}