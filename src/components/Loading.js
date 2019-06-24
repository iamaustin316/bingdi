import React, { Component } from 'react';
import styled from 'styled-components';

const PopupWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #4b3b2f;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  transition: all 1.4s ease-in;
  &.loaded {
    transform: scale(1.5);
    opacity: 0;
    pointer-events: none;
  }
`

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <PopupWrap id='loading'>
        
      </PopupWrap>
    );
  }
}

export default Loading;