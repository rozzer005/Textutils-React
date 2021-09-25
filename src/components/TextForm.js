import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success");
    }
    const handleLoClick = ()=>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to Lowercase","success");
    }
    const handleRemoveSpaceClick = ()=>{
        let newText  = text.replace(/\s/g,'');
        setText(newText);
        props.showAlert("Removed spaces","success");
    }
    // const handleItalicsClick = ()=>{
    //     // console.log("Upper case was clicked" + text);
    //     let newText = text.italics();
    //     setText(newText);
    // }
    // const handleStrikeClick = ()=>{
    //     // console.log("Upper case was clicked" + text);
    //     let newText = text.strike();
    //     setText(newText);
    // }
    const handleClearClick = ()=>{
        // console.log("Upper case was clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared","success");
    }
    const handleOnChnage = (event)=>{
        // console.log("on change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
           <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChnage} id="myBox" rows="8" style={{backgroundColor: props.mode === 'dark'?'#090c56':'white', color: props.mode === 'dark'?'white':'black'}} ></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleRemoveSpaceClick}>Font Increased Text</button>
            
            
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2>Your Text summary Here</h2>
            <p><strong>{text.split(" ").length}</strong> Words and <strong>{text.length}</strong> Characters</p>
            <p><strong>{0.008 * text.split(" ").length}</strong> Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter the text above to preview the text here......'}</p>
        </div>
        </>
    )
}
