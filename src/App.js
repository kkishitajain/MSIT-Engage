import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
// import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NoteState from './context/notes/NoteState';
import { CompaniesOC } from './components/CompaniesOC';
import { AddComp } from './components/AddComp';
import { AppliedComps } from './components/AppliedComps';
import { Calendar } from './components/Calendar';
import { Resources } from './components/Resources';
// import JobSearch from './components/JobSearch';
import OffCampus from './components/OffCampus';
import Msit from './components/Msit';


function App() {
  return (
    
  <>
  <NoteState>
    <Router>
    {/* <Alert msg="this is alert"/> */}
      {/* <Navbar/> */}
      {/* <div class="sidebar">
            <a class="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
      </div> */}
      <Navbar/>
      <div className="content my-5">
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/CompaniesOC">
            <CompaniesOC/>
          </Route>
          <Route exact path="/AppliedComps">
            <AppliedComps/>
          </Route>
          <Route exact path="/AddComp">
            <AddComp/>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/Cal">
            <Calendar/>
          </Route>
          <Route exact path="/Resources">
            <Resources/>
          </Route>
          <Route exact path="/OffCampus">
            <OffCampus/>
          </Route>
          <Route exact path="/Msit">
            <Msit/>
          </Route>
        </Switch>
        </div>
      </Router>
    </NoteState>
    </>
  );
}

export default App;
