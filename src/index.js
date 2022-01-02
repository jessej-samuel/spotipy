import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reducers from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

const rooty = () => {
    
    return (
        <Provider
            store={createStore(
                reducers,
                window.__REDUX_DEVTOOLS_EXTENSION__ &&
                    window.__REDUX_DEVTOOLS_EXTENSION__()
            )}
        >
            <App />
        </Provider>
    );
};

ReactDOM.render(rooty(), document.getElementById("root"));
