import React, { Component } from 'react';
import styled from 'styled-components';

const PopupUI = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0,0,0,0.8);
  z-index: 100;
  transition: all 800ms ease-in-out;
  opacity: ${props => props.showPopup? 1 : 0}
  pointer-events: ${props => props.showPopup? 'auto' : 'none'}
  div {
    width: 560px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: auto;
    transform: translate3d(-50%,-50%,0);
    img {
      transition: all 800ms ease-in-out 800ms;
      opacity: ${props => props.showPopup? 1 : 0}
      max-width: 100%;
      height: auto;
      display: block;
      margin: 0;
    }
  }
  @media (max-width: 959px) {
    div {
      width: 90vw;
    }
  }
`

const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: 0;
  padding: 0;
  &::before {
    content: "";
    width: 20px;
    height: 2px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%,-50%,0) rotate(45deg);
  }
  &::after {
    content: "";
    width: 20px;
    height: 2px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%,-50%,0) rotate(-45deg);
  }
`

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() { 
    return (
      <PopupUI showPopup={this.props.show}>
        <CloseBtn onClick={this.props.closeFN}></CloseBtn>
        <div className='inner'>
          <img src={this.props.imageName} alt=""/>
        </div>
      </PopupUI>
    );
  }
}
 
export default Popup;