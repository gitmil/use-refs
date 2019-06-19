import React, { useRef, useEffect } from "react";
import "./App.css";
// ref mean reference
// hold mutable object ref in its current prop
// way to access DOM that is created by react.
// note: mutating current doesnt rerender
//If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead.
//https://www.reddit.com/r/reactjs/comments/aufijk/useref_is_basically_usestatecurrent_initialvalue_0/
//https://www.fullstackreact.com/articles/an-introduction-to-hooks-in-react/#useref-and-forms-with-input
const title = {
  marginBottom: "50px",
  fontSize: "30px"
};
const field = {
  display: "flex",
  flexDirection: "row",
  marginBottom: "5px",
  justifyContent: "space-between",
  width: "300px"
};

const button = {
  marginTop: "10px",
  width: "300px",
  paddingTop: "20px",
  paddingBottom: "20px"
};

function App() {
  const firstInputRef = useRef();
  const secondInputRef = useRef();
  const thirdInputRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    firstInputRef.current.focus();
  }, []);

  const ids = ["firstInput", "secondInput", "thirdInput", "button"];

  const clickHandle = () => {
    alert("submitted");
  };
  const keyPress = e => {
    console.log(e.keyCode);
    if (e.keyCode === 13 || e.keyCode === 39) {
      if (e.target.id === "firstInput") {
        secondInputRef.current.focus();
      }
      if (e.target.id === "secondInput") {
        thirdInputRef.current.focus();
      }
      if (e.target.id === "thirdInput") {
        buttonRef.current.focus();
      }
    }

    if (e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 40) {
      if (e.target.id === "thirdInput") {
        secondInputRef.current.focus();
      }
      if (e.target.id === "button") {
        thirdInputRef.current.focus();
      }
      if (e.target.id === "secondInput") {
        firstInputRef.current.focus();
      }
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <div style={title}>Use Refs</div>
        <div style={field}>
          <span>name</span>
          <input
            ref={firstInputRef}
            id={ids[0]}
            onKeyDown={keyPress}
            type="text"
          />
        </div>
        <div style={field}>
          <span>age</span>
          <input
            ref={secondInputRef}
            id={ids[1]}
            onKeyDown={keyPress}
            type="text"
          />
        </div>
        <div style={field}>
          <span>married?</span>
          <input
            ref={thirdInputRef}
            id={ids[2]}
            onKeyDown={keyPress}
            type="checkbox"
          />
        </div>
        <button
          ref={buttonRef}
          onClick={clickHandle}
          id={ids[3]}
          onKeyDown={keyPress}
          style={button}
        >
          Submit
        </button>
      </header>
    </div>
  );
}

export default App;
