import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  const changeupper = () => {
    const uppercaseText = text.toUpperCase();
    setText(uppercaseText);
  };

  const changelower = () => {
    const lowercasewala = text.toLowerCase();
    setText(lowercasewala);
  };

  const empty = () => {
    const emptywala = "";
    setText(emptywala);
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
      <button className="btn btn-primary my-3" onClick={changeupper}>
        Convert To Uppercase
      </button>
      <button type="button" className="btn btn-primary mx-3" onClick={changelower}>
        Convert To Lowercase
      </button>
      <button className="btn btn-danger mx-2" onClick={empty}>
        Clear
      </button>
      <div className="wordscount">
        <h5>
          Your words count as :{" "}
          <p>
            {" "}
            {text.split(" ").length} words and {text.length} characters{" "}
          </p>
        </h5>
      </div>
    </>
  );
}

export default TextForm;
