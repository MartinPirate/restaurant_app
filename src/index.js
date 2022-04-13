import React from "react";
import ReactDOM from 'react-dom'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";
import App from './App'

import {StateProvider} from "./context/StateProvider";
import {initialState} from "./context/initialState";
import reducer from "./context/reducer";

/*import router as the topmost so as not to worry about the main router */
ReactDOM.render(
    <Router>
        <StateProvider  initialState={initialState} reducer={reducer}>
            <App/>
        </StateProvider>

    </Router>,
    document.getElementById('root')
)


