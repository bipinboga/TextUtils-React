import React, { useState } from 'react';


export default function TextForm(props) {

    const upperClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }

    const lowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
    }

    const clearText = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Text has been cleared", "success")
    }

    // const darkMode = () => {
    //     if(myStyle.color === 'white'){
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //     } else{
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //     }
    // }

    const upOnChange = (event) => {
        setText(event.target.value)
    }

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    const [text, setText] = useState("")

    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea  className="form-control" style={{ backgroundColor: props.mode==='dark'?'#5e5e5e':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="10" value={text} onChange={upOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={upperClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={lowerClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
            {/* <button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button> */}
            {/* <button className="btn btn-dark mx-2" onClick={darkMode}>Dark Mode</button> */}
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview it here"}</p>
        </div>
        </>
  )
}
