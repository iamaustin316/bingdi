import React, { Component } from 'react';
import styled from 'styled-components';

const StoryItems = styled.div`
  text-align: center;
  margin-bottom: 32px;
  &:last-child {
    margin-bottom: 0;
  }
  h3 {
    box-sizing: border-box;
    width: 186px;
    border: solid 1px #fff;
    font-size: 20px;
    padding: 0 32px;
    height: 48px;
    line-height: 48px;
    display: block;
    color: #fff;
    margin: 0 auto 16px;
  }
  p {
    font-size: 12px;
    line-height: 1.6;
    color: #fff;
    margin: 0;
    text-align: left;
  }
`

class StoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <StoryItems>
        <h3>{this.props.title}</h3>
        <p>{this.props.desc}</p>
      </StoryItems>
    );
  }
}
 
export default StoryItem;