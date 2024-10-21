// Counter (number) 
import {useState} from 'react';

export function Count(){
    const [res,setRes]=useState(0);
    function increase(){
        return(
            setRes (res+1)
        )
    }
    return(
        <div>
            <button type="button" onClick={increase}>You Pressed Me Only {res} times.</button>
        </div>
    )
}