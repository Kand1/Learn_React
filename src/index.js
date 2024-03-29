import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/ReduxStore";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";


ReactDOM.render(

        <Provider store={store}>
            <HashRouter>
                <App/>
            </HashRouter>
        </Provider>
    ,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
