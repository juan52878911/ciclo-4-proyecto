import React from "react";
import axios from 'axios';
import ReactDOM from "react-dom";
import App from "./App.jsx"

//axios config
axios.defaults.baseURL = 'https://murmuring-plateau-00381.herokuapp.com/api';

ReactDOM.render(<App name="juan"/>, document.getElementById("root"));