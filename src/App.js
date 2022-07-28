import "./App.css";
import React, { useState, useEffect } from "react";
import GetGithubUser from './components/getGithubUsers';
import ReactTimer from './components/reactTimer';
import ReactSpeedometerCompoent from './components/reactspeedometor';
import CounterStatrEnd from './components/counterStatrEnd'
function App() {
  
  return (
    <>
    {/* <GetGithubUser/> */}
    {/* <ReactTimer/> */}
    <CounterStatrEnd/>
    <ReactSpeedometerCompoent/>
    </>
  );
}

export default App;
