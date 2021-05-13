import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import classNames from "classnames";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';



export const Nav = () => {
    function isActive(path) {
        let pname = window.location.pathname;
        if(pname === path){
          return(true);
        }
      };
    return(
    <div className="nav">
        <a href="/a" className={classNames({
        'nav-item': true,
        active: isActive('/a'),
      })}>
        Home
      </a>
      <a href="/b" className={classNames({
        'nav-item': true,
        active: isActive('/b'),
      })}>
        Personal
      </a>
      <a href="/c" className={classNames({
        'nav-item': true,
        active: isActive('/c'),
      })}>
       Memeing
      </a>
    </div>
    )
}