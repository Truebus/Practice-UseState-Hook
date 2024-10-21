//Create a theme toggler that switches between light and dark modes. 
//Use the useState hook to manage the current theme and apply conditional styling based on the selected theme.
import { useState,useEffect} from "react";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
export const ThemeToggler=()=>{
    const[puttheme,setPuttheme]=useState(false);
    const styles={
        light:{backgroundColor:"white",color:"black"},
        dark:{backgroundColor:"black",color:"white"},
    }
    const current=puttheme?styles.light:styles.dark;
    useEffect(()=>{
    document.body.style.backgroundColor=current.backgroundColor;
    document.body.style.color=current.color;
    },[current])
    const handle=()=>{
        setPuttheme(pre=>!pre)
    }
    return(
        <div onClick={handle} style={{height:"500px",width:"500px",border:"3px solid black", backgroundColor:current.backgroundColor}}>
        {puttheme ?<MdOutlineWbSunny />:< FaRegMoon />} 
            <h1>This is my Theme Toggler</h1>
        </div>
    )
}