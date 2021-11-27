import React from "react";
import axios from 'axios';
import ReactDOM from "react-dom";
import App from "./App.jsx"
import "./views/LoguedHome.css";


import "./views/LoguedHome.css"
//axios config
axios.defaults.baseURL = 'http://localhost:3100/api';

ReactDOM.render(<App name="juan"/>, document.getElementById("root"));