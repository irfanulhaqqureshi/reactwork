import React, {useState} from 'react';
import './Room.css';
function Room() {
    let [isLit, setLit] = useState(true);
    let [tmpr, setTmpr] = useState(72);
    function updateLit(){
        console.log("Button Clicked");
        setLit(!isLit);
    }
    return(
        <div className= {`room ${isLit ? "lit" : "dark"}`}>
            This Roome is {isLit ? "Light" : "Dark"}
            <br></br>
            Temprature : {tmpr}
            <br></br>
            <button onClick={updateLit}>Toggle Light</button>
            <br></br>
            <button onClick = {() => setLit(true)}>Light ON</button>
            <button onClick = {() => setLit(false)}>Light OFF</button>
            <br></br>
            <button onClick = {() => setTmpr(++tmpr)}>+</button>
            <button onClick = {() => setTmpr(--tmpr)}>-</button>
        </div>
    );
}
export default Room;