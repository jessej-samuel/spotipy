import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reducers from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.getElementById("root")
);
