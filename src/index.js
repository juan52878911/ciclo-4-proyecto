import React from "react";
import axios from 'axios';
import ReactDOM from "react-dom";
import App from "./App.jsx"

//axios config
axios.defaults.baseURL = 'https://trueque-mental-api.herokuapp.com/api';

ReactDOM.render(<App name="juan"/>, document.getElementById("root"));