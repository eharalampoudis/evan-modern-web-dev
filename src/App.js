import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from "classnames";
import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import ParticlesBg from "particles-bg";
import Button from 'react-bootstrap/Button';



function App() {
  function isActive(path) {
    let pname = window.location.pathname;
    if(pname === path){
      return(true);
    }
  };
  return (
    <div className="wrapper">
    <div className="nav">
      <a href="/a" className={classNames({
        'nav-item': true,
        active: isActive('/a'),
      })}>
        Link A
      </a>
      <a href="/b" className={classNames({
        'nav-item': true,
        active: isActive('/b'),
      })}>
        Link B
      </a>
      <a href="/c" className={classNames({
        'nav-item': true,
        active: isActive('/c'),
      })}>
        Link C
      </a>
    </div>
    <div classname="background">
      <Button variant="outline-danger" active>Primary</Button>{' '}
      <ParticlesBg type="circle" bg={true} />
    </div>
</div>

  );
}

export default App;
