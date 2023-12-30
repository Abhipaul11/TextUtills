import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked " + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted into uppercase", "success");
        // setText("You have clicked on handleupclick")
    }
    const handleLoClick = () => {
        // console.log("lowercase was clicked " + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted into lowercase", "success");
        // setText("You have clicked on handleLoclick")
    }
    const handleOnChange = () => {
        // console.log("On change");
        setText(Event.target.value);

    } 
    const handleClClick = () => {
        // console.log("lowercase was clicked " + text)
        let newText = " ";
        setText(newText)
        // setText("You have clicked on handleLoclick")
    }
    const [text, setText] = useState('Enter text here2');

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3" >

                <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , 
                color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary ms-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear text</button>
        </div>
        <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minites read</p>
            <h1>preview</h1>
            <p>{text.lenght>0?text:"Enter something in the textboxto preview"}</p> 
        </div>
        </>
    )
}
