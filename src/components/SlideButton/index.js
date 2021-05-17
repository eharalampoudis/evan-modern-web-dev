import React, { Component } from "react";
import './SlideButton.css';

class SlideButton extends Component {
    render() {
      return (
        <button id="roundButton"
                onMouseDown={this.props.handleMouseDown}></button>
      );
    }
  };
   
export default SlideButton;