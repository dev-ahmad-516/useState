import React from "react";
import Popup from "./Popup";
import PasswordToggle from "./PasswordToggle.jsx"; 
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";


function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Popup />
      <PasswordToggle />
    </>
  );
}

export default App;
