import React, { useState } from 'react'

export default function Textform(props) {
    const upperCaseChange = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text changed to uppercase!", "success")
    }
    const lowerCaseChange = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text changed to lowercase!", "success")
    }
    const textClearChange = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Cleared text!", "success")
    }

    const textCopy = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to clipboard!", "success")
    }

    const removeExtraSpace = () => {
        console.log("clicked");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success")
    }

    const changeHandle = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className='container' style={{color: props.mode===`dark`?`white`:`black`}}>
                <h1>{props.heading}</h1>
                <div className="mb-3 my-3">
                    <textarea className="form-control" value={text} onChange={changeHandle} style={{backgroundColor: props.mode===`dark`?`#021737`:`white`,color: props.mode===`dark`?`white`:`black`}}  id="my-box" rows="5"></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={upperCaseChange}>Change to Uppercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={lowerCaseChange}>Change to Lowercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={textClearChange}>Clear text</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={textCopy}>Copy text</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={removeExtraSpace}>Remove extra space</button>
            </div>
            <div className='container my-2' style={{color: props.mode===`dark`?`white`:`black`}}>
                <h3>Your text summary</h3>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} characters</p>
                <h4>Time to read one word</h4>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Nothing to preview!"}</p>
            </div>
        </>
    )
}
