import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/home';
import Projects from './components/project';
import Gallery from './components/gallery';
import About from './components/about';
import {ContextApi } from './components/context_api';

export default function App() {
  return (
    <Router>
      <ContextApi>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/gallery" component={Gallery}/>
          <Route path="/about" component={About}/>
          <Route path={`/:name`} component={Projects}/>
        </Switch>
      </ContextApi>
    </Router>
  );
}
