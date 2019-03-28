import React, { Component } from 'react'
import styled from 'styled-components'


const BtnToggles = styled.button`
    display: none;
    width: 32px;
    height: 32px;
    position: absolute;
    right: 16px;
    top: 8px;
    background-color: transparent;
    border: 0;
    transition: all 500ms ease-in-out;
    @media (max-width: 980px) {
        display: block;
    }
    &::before {
        content: "";
        width: 24px;
        height: 2px;
        background-color: #666;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%,-200%,0) rotate(-0);
        transform-origin: center;
        transition: all 300ms ease-in-out;
    }
    &::after {
        content: "";
        width: 24px;
        height: 2px;
        background-color: #666;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%,100%,0);
        transform-origin: center;
        transition: all 300ms ease-in-out;
    }
    &.is-active {
        &::before {
            transform: translate3d(-50%,-50%,0);
        }
        &::after {
            transform: translate3d(-50%,-50%,0);
        }
    }
`

class BtnToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <BtnToggles id='btnToggle' onClick={this.props.click}></BtnToggles>
    );
  }
}
 
export default BtnToggle;