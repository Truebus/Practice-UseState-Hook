import { useState } from "react"

export function My(){
   const [changecolor,setChangecolor]=useState("white");
   const Fun=(newcolor)=>{
             setChangecolor (newcolor)
   }
   
    return(
        <div style={{backgroundColor: changecolor, padding:20, height: 200}}>
            <button type="button" onClick={()=>Fun("red")}>Red</button>
            <button type="button" onClick={()=>Fun("blue")}>Blue</button>
            <button type="button" onClick={()=>Fun("green")}>Green</button>
            <button type="button" onClick={()=>Fun("yellow")}>Yellow</button>
            <button type="button" onClick={()=>Fun("pink")}>Pink</button>
            <button type="button" onClick={()=>Fun("orange")}>Orange</button>
            <div style={{marginTop: 20}}>
            <button type="button" onClick={()=>setChangecolor("white")}>Reset</button>
            </div>
        </div>
    )
}
