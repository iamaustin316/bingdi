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
  background-color: rgba(0,0,0,0.9);
  z-index: 100;
  transition: all 800ms ease-in-out;
  opacity: ${props => props.showPopup ? 1 : 0}
  pointer-events: ${props => props.showPopup ? 'auto' : 'none'}
  div {
    width: 560px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: auto;
    transform: translate3d(-50%,-50%,0) scale3d(1,1,1);
    transition: opacity 600ms ease-in-out,transform 600ms ease-in-out;
    img {
      transition: all 800ms ease-in-out 1200ms;
      opacity: ${props => props.showPopup ? 1 : 0}
      max-width: 100%;
      height: auto;
      display: block;
      margin: 0;
    }
    &.is-hide {
      transform: translate3d(-50%,-50%,0) scale3d(0.5,0.5,0.5);
      opacity: 0;
    }
  }
  @media (max-width: 959px) {
    div {
      width: calc(100vw - 32px);
    }
  }
`

const CloseBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 16px;
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
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
`

const BtnPrev = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(0,0,0,0.9);
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate3d(0,-50%,0);
  z-index: 50;
  border: 0;
  padding: 0;
  &:before {
    content: "";
    width: 10px;
    height: 2px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-60%,-200%,0) rotate(-45deg);
  }
  &:after {
    content: "";
    width: 10px;
    height: 2px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-60%,100%,0) rotate(45deg);
  }
`

const BtnNext = styled.button`
  width: 32px;
  height: 32px
  border-radius: 50%;
  background-color: rgba(0,0,0,0.9);
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate3d(0,-50%,0);
  z-index: 50;
  border: 0;
  padding: 0;
  &:before {
    content: "";
    width: 10px;
    height: 2px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-40%,-200%,0) rotate(45deg);
  }
  &:after {
    content: "";
    width: 10px;
    height: 2px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-40%,100%,0) rotate(-45deg);
  }
`

class Popup extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }
  render () { 
    return (
      <PopupUI showPopup={this.props.show}>
        <CloseBtn onClick={this.props.closeFN}></CloseBtn>
        <div className='inner' id="flowImageWarp">
          <img src={this.props.imageName} alt=""/>
        </div>
        <BtnPrev onClick={this.props.onClickSwitch} data-name='prev'></BtnPrev>
        <BtnNext onClick={this.props.onClickSwitch} data-name='next'></BtnNext>
      </PopupUI>
    );
  }
}
 
export default Popup;