import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Component } from "react";
import { Container} from 'react-bootstrap';
import { SlideMenu } from './components/SlideMenu';
import { SlideButton } from './components/SlideButton';


class MenuContainer extends Component {
    constructor(props, context) {
      super(props, context);
   
      this.state = {
        visible: false
      };
   
      this.handleMouseDown = this.handleMouseDown.bind(this);
      this.toggleMenu = this.toggleMenu.bind(this);
    }
   
    handleMouseDown(e) {
      this.toggleMenu();
   
      console.log("clicked");
      e.stopPropagation();
    }
   
    toggleMenu() {
      this.setState(
        {
          visible: !this.state.visible
        }
      );
    }

    render() {
        return (
          <Container>
            <SlideButton handleMouseDown={this.handleMouseDown}/>
            <SlideMenu handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}/>
            <div>
              <p>Can you spot the item that doesn't belong?</p>
              <ul>
                <li>Lorem</li>
                <li>Ipsum</li>
                <li>Dolor</li>
                <li>Sit</li>
                <li>Bumblebees</li>
                <li>Aenean</li>
                <li>Consectetur</li>
              </ul>
            </div>
          </Container>
        );
      }
    }

export default MenuContainer;