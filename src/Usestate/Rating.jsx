//Create a component that allows users to rate something on a scale of 1 to 5.
// Requirements:
// •	Use a state to hold the rating value.
// •	Initialize the state to 0.
// •	Create 5 buttons representing the rating options.
// •	Display the selected rating below the buttons
import { useState } from "react"
export const Rating=()=>{
    const[ratingvalue,setRatingValue]=useState(0);
    const array=[1,2,3,4,5,6,7];
    const handlerating=(x)=>{
        setRatingValue(x)
    }
    return(
        <div>
           <h1> Allows the users to rate something.</h1>
          {array.map((x)=>(
             <button key={x} onClick={()=>handlerating(x)}>Rating {x}</button>
          ))}
          <p>{ratingvalue>0? `"Your rating is" ${ratingvalue}`:null}</p>
        </div>
    )
}
