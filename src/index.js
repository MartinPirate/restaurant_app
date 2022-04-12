import React from "react";
import ReactDOM from 'react-dom'
import './index.css'

import {BrowserRouter as Router} from "react-router-dom";


import App from './App'

/*import router as the topmost so as not to worry about the main router */
ReactDOM.render(
    <Router>
        <App/>
    </Router>,

    document.getElementById('root')
)


