import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import ReactDOM from "react-dom";
import { Nav } from './components/Nav';
import { Background } from './components/Background';
import { Home } from './components/Home';
import { Personal } from './components/Personal';
import { Assassin }  from './components/Assassin';
import { Footer } from './components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { useEffect, useState } from 'react';
import classNames from "classnames";



function App() {
  return (
    <Router>
    <Container className='central'>
      <Nav />
      <Background />
         <Switch>
           <Route path = '/Personal'><Personal /></Route>
           <Route path = '/Assassin'><Assassin /></Route>
           <Route exact path = '/'><Home /></Route>
         </Switch>
        <Footer />
    </Container>
    </Router>
  );
}

export default App;
