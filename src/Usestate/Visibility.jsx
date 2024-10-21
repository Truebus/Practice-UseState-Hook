//toggle visibility
import { useState } from "react"

export function ToggleVisibility(){
    const[visible,setVisible]=useState(false)
    const click=()=>{
        setVisible (!visible)
    }
    return(
        <div>
        <button type="button" onClick={click}>Show/Hide Button</button>
        {/* {visible?"The show/hide is property value of visibility.It is used to show or hide the content just click on buuton":""} */}
        {visible &&(<p>The show/hide is property value of visibility.It is used to show or hide the content just click on buuton</p>)}
        </div>
    )
}