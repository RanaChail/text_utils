import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import React, { useState } from "react";

function App() {
  const [mode, setmode] = useState("light"); //wheather dark mode is enabled or not.
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const tooglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#28282c";
      showAlert("Dark mode has been enabled.", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled.", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        togglemode={tooglemode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextArea
          showAlert={showAlert}
          heading="Enter the text to analyze"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
