import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to Lowercase","success");
    }
    const handleRemoveSpaceClick = ()=>{
        let newText  = text.replace(/\s/g,'');
        setText(newText);
        props.showAlert("Removed spaces","success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared","success");
    }
    const handleOnChnage = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1 className="mb-2">{props.heading}</h1>
           <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChnage} id="myBox" rows="8" style={{backgroundColor: props.mode === 'dark'?'#010628':'white', color: props.mode === 'dark'?'white':'black'}} ></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveSpaceClick}>Remove Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
             <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2>Your Text summary Here</h2>
            <p><strong>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length}</strong> Words and <strong>{text.length}</strong> Characters</p>
            <p><strong>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length}</strong> Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Nothing to preview'}</p>
        </div>
        </>
    )
}
