import React from "react";
import NavBar from "./components/NavBar";
import MyHome from "./components/MyHome";

function App() {
  return (
    
    <div className="App">
      <NavBar title="StriveBooks" />
      <MyHome jumboTitle='Welcome to StrivesBooks' />
    </div>
   
  );
}

export default App;