import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import AddUser from './Component/Data/AddUser';
import EditUser from './Component/Data/EditUser';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Navbar>
              <Home />
            </Navbar>
          </Route>
          <Route path="/adduser">
            <Navbar>
              <AddUser />
            </Navbar>
          </Route>
          <Route path="/edit">
            <Navbar>
              <EditUser />
            </Navbar>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
