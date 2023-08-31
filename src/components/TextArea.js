import React, { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState("");
  // text = "Rana"; This is wrong way to change the text in react
  // setText("Rana"); This is right way to change the text in react
  const handleUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };
  const handleLowCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };
  const handleExSpace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra Spaces", "success");
  }
  const handleCopy = () => {
    let text = document.getElementById("textBox");
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied", "success");
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance(); //Speak function
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{background: props.mode === 'dark'?'#28282c':'white', color: props.mode === 'dark'?'white':'black'}}
            id="textBox"
            rows="7"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpCase}>
          Covert to UpperCase
        </button>
        <button className="btn btn-success mx-2 my-2" onClick={handleLowCase}>
          Covert to LowerCase
        </button>
        <button className="btn btn-secondary mx-2 my-2" onClick={handleExSpace}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-warning mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-danger mx-2 my-2" onClick={handleClear}>
          Clear
        </button>
        <button className="btn mx-2 my-2" onClick={speak}>
          <box-icon type="solid" name="user-voice"></box-icon>
        </button>
      </div>
      <div className="container my-4" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} charecters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above textbox to preview it here..."}</p>
      </div>
    </>
  );
}
