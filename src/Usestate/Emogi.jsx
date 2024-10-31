//Create a component that allows users to select an emoji from a predefined list.
// Requirements:
// •	Use state to track the selected emoji.
// •	Initialize the state with a default emoji (e.g., "😊").
// •	Display the emoji selector as a series of buttons.
// •	Show the currently selected emoji below the buttons.

import 'emoji-mart/css/emoji-mart.css';
export const Emoji=()=>{
    return(
        <div>
            <h1>Select pre-defined emoji</h1>
            <p><Emoji emoji="rocket"/></p>

        </div>
    )
}