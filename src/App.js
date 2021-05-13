import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Nav } from './components/Nav';
import { useEffect, useState } from 'react';
import classNames from "classnames";
import React from 'react';
import ParticlesBg from "particles-bg";




function App() {
  return (
    <div className="wrapper">
      <Nav />
      <div classname="background">
        <ParticlesBg type="square" bg={true} />
      </div>
    </div>

  );
}

export default App;
