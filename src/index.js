import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router,Route, Switch, Redirect } from "react-router-dom";
import './index.css';
import './i18n';
import './bootstrap-owerride.scss'
import UserSignUpPage from './pages/UserSignUpPage';
import HomePage from './pages/HomePage';
import TopBar from './pages/TopBar';
import UserPage from './pages/UserPage';
import LoginPage from'./pages/LoginPage'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <TopBar />
        <Switch>
        <Route exact path="/"  component={HomePage} />
                  <Route exact path="/login" component={LoginPage} />
                  <Route exact path="/signup" component={UserSignUpPage} />
                  <Route exact path="/user/:username" component={UserPage} />
                  <Redirect to="/login" />
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
