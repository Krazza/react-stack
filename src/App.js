import React, { useState } from "react";
import "./App.css"

function App()
{
    const [userInput, setUserInput] = useState();
    const [stack, setStack] = useState([]);

    return(
        <div className="container">
            <h1>Stack</h1>
            <h2>Result: {stack.join(", ")}</h2>
            <input type="text" onChange={HandleInput}></input>
            <div className="buttonContainer">
                <button className="mybuttonclass" onClick={AddToStack}>Add</button>
                <button className="mybuttonclass" onClick={RemoveFromStack}>Remove</button>
            </div>
        </div>
    )

    function HandleInput(event)
    {
        setUserInput(event.target.value);
    }

    function AddToStack()
    {
        setStack(arr => [...arr, userInput]);
    }

    function RemoveFromStack()
    {
        let tempArr = stack;
        tempArr.pop();
        setStack([...tempArr]);
    }
}

export default App;