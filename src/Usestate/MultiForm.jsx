//Build a simple multi-step form that collects user information in stages.
// Requirements:
// •	Use state to track the current step and user inputs.
// •	Create components for each step (e.g., Step 1: Name, Step 2: Email).
// •	Include "Next" and "Previous" buttons to navigate between steps
import { useState } from "react";
export const MultiForm=()=>{
  const[tack,setTack]=useState(0);
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[data,setData]=useState([]);
  const handlename=(e)=>{
    setName(e.target.value);
  }
  const handlemail=(e)=>{
    setEmail(e.target.value);
  }
  const handleprev=()=>{
    setTack((prev)=>prev-1);
  }
  const handlenext=()=>{
    setTack((prev)=>prev+1);
  }
  const handledata=()=>{
    setData((prev=>[...prev,{name},{email}]))
  }
    return(
        <div>
            {tack===0 &&(
                <div>
            <label>Name</label>
            <input type="text" value={name} onChange={handlename}/>
            </div>
        )}
        {tack===1 &&( 
            <div>
            <label>Email</label>
            <input type="email" value={email} onChange={handlemail}/><br/>
            </div>
        )}
            <button onClick={handlenext} disabled={tack===1}>Next</button>
            <button onClick={handleprev}disabled={tack===0}>Previous</button><br/>
            <button onClick={handledata}>Submit</button>
            {data.map((x,index)=>(
                <div>
                    <h1 key={index}>{x.name}</h1>
                    <h1 key={index}>{x.email}</h1>
                </div>
            ))}
        </div>
    )
}
