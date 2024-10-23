// Build a temperature converter that converts between Celsius and Fahrenheit.
// Requirements:
// •	Use a state to hold the temperature value.
// •	Create input fields for Celsius and Fahrenheit.
// •	Update the respective fields based on user input, with conversions happening in real-time.
import { useState } from "react";
export const Temperature=()=>{
    const[celcius,setCelcius]=useState('')
    const[fahrenheit,setFahrenheit]=useState('')
    const handlecelcius=(e)=>{
        const value=e.target.value;
        setCelcius(value)
        if(value!==''){
            const convertedValue = (value * 9/5) + 32;
            setFahrenheit(convertedValue.toFixed(2));//mention two decimal places only
        }else{
            setFahrenheit('')
        }
    }
    const handlefaherenheit=(e)=>{
        const value=e.target.value;
        setFahrenheit(value)
        if(value!==''){
            const convertedValue=(value - 32) * 5/9;
            setCelcius(convertedValue.toFixed(2));
        }else{
            setCelcius('')
        }
    }
    return(
        <div>
            <label>This is for Celcius:-</label>
            <input type="text" onChange={handlecelcius} value={celcius}></input><br/>
            <label>This is for Fahrenheit</label>
            <input type="text" onChange={handlefaherenheit} value={fahrenheit}></input>
        </div>
    )
}
