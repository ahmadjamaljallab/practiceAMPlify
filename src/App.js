
import React from 'react';

import './App.css';

import {TextField ,Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

function App() {
   const Navigate= useNavigate();
    const loginHandler = () => {
        Navigate('/successAuth');
    };
  return (
    <div className="App-header">
        <h1>Hello Amplified React!</h1>
        <div className="Flex_container ">
            <TextField id="standard-basic" label="username" variant="standard" />
            <TextField id="filled-basic" label="password" variant="standard" />
            <Button variant="contained" onClick={loginHandler}>login</Button>
        </div>
    </div>
  );
}

export default App;
