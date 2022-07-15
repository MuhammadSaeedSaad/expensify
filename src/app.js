import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter"
// to reset the css for all browsers to start from the same point (vid 8.4)
import "normalize.css/normalize.css";
import "./styles/styles.scss";

ReactDOM.render(<AppRouter />, document.getElementById("app"));