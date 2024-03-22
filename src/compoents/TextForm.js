import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("Enter the text");

  const changeupper = () => {
    const uppercaseText = text.toUpperCase();
    setText(uppercaseText);
  };

  return (
    <>
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <button className="btnforupcase" onClick={changeupper}>
        Convert To Uppercase
      </button>
      <div className="wordscount">
        <h4>
            Your words count as : <p> {text.split(" ").length} words and {text.length} characters </p>
        </h4>
      </div>
    </>
  );
}

export default TextForm;
