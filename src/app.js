import React, { useContext } from 'react';
import ToDo from './components/todo.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import SettingsForm from './context/settingsForm.js';
import LoginForm from './components/login/login-form';
import { LoginContext } from './context/Login-context';
import { If, Else, Then } from 'react-if';
import './app.scss';
export default function App() {
  const logincontext = useContext(LoginContext);
  return (
    <>
      <Router>
        <Header />
        <If condition={logincontext.loggedin}>
          <Then>
            <Switch>
              <Route exact path='/'>
                <ToDo />
              </Route>
              <Route path='/settings'>
                <If condition={logincontext.userCapability > 1}>
                  <Then>
                    <SettingsForm />
                  </Then>
                  <Else>
                    <h2>you don't have a permission to control the settings!</h2>
                  </Else>
                </If>
              </Route>
            </Switch>
          </Then>
          <Else>
            <>
              <br /> <LoginForm />
            </>
          </Else>
        </If>
      </Router>
    </>
  );
}