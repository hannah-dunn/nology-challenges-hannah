import { useState } from "react";
import "./App.css";
import ControlledForm from "./components/Form/Form";

function App() {
  // const formSubmit = (data) => {
  //   console.log("form was submitted with ", data);
  // };
  return (
    <>
      <ControlledForm handleSubmit={formSubmit} />
    </>
  );
}

export default App;
