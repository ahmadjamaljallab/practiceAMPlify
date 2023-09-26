import logo from './logo.svg';
import './App.css';
import {TextField ,Button} from "@mui/material";

function App() {
  return (
    <div className="App-header">
        <h1>Hello Amplified React!</h1>
        <div className="Flex_container ">
            <TextField id="standard-basic" label="username" variant="standard" />
            <TextField id="filled-basic" label="password" variant="standard" />
            <Button variant="contained">login</Button>
        </div>
    </div>
  );
}

export default App;
