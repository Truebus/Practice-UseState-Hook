import { useState } from "react"

export default function Additem(){
    const[insert,setInsert]=useState([]);
    const[inputvalue,setInputvalue]=useState('');
    const handletxt=(e)=>{
       setInputvalue(e.target.value)
    }
    const add=()=>{
        if(inputvalue.trim()){
            setInsert([...insert,inputvalue])
            setInputvalue('')
        }
    }
    const del=(index)=>{
     setInsert(insert.filter((_,i)=>i!==index))
    }
    
    return(
        <div>
            <input type="text" value={inputvalue} onChange={handletxt}></input>
            <button type="button" onClick={add}>Add Items</button>
  
                {insert.map((x,index)=>(
                <h2 key={index}>{x}
                <button type="button" onClick={()=>del(index)}>Delete It</button>
                </h2>
                ))}
          

        </div>
    )
}