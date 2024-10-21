import './Adimg.css'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

export default function AddByImg(){
    const [txt,setTxt]=useState([]);
    const [value,setValue]=useState('');
    const insert=(e)=>{
        setValue(e.target.value)
    }
    const add=()=>{
        if(value.trim()){
            setTxt([...txt,value]);
            setValue('')
        }
    }
    const del = (index) => {
        setStoreItem((prevItems) => prevItems.filter((_, i) => i !== index));
    };

    return(
        <div className='container'>
            <div className='icons'>
            <input type="text" value={value} onChange={insert}></input>
            <FaEdit className="edit" onClick={add} style={{cursor:"pointer"}}/>
            </div>
            <div className='icons'>
            {txt.map((x,index)=>(
            <h1 key={index}>{x}
            <MdDelete className="delete" style={{cursor:"pointer"}} onClick={()=>del(index)}/>
            </h1>
            ))}
             </div>
        </div>
    )
}