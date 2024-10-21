import {useState} from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export function Fun(){
    const[isLike,setIsLike]=useState(false)
    function handle(){
        setIsLike(!isLike)
    }
    return(
        <div onClick={handle}>
        {isLike ?<FaHeart style={{backgroundColor:"red"}}/>:<FaRegHeart />}
        </div>
    )
}