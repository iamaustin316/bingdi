import React, { Component } from 'react';
import styled from 'styled-components';

const StoryItems = styled.div`
  text-align: center;
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
  h3 {
    box-sizing: border-box;
    border: solid 1px #fff;
    font-size: 18px;
    padding: 0 32px;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    color: #fff;
    margin: 0 auto 16px;
  }
  p {
    font-size: 14px;
    line-height: 1.8;
    color: #d4c7bf;
    margin: 0;
    text-align: left;
    letter-spacing: 1px;
    br {
      display: block;
      line-height: 48px;
    }
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
        <p dangerouslySetInnerHTML={{ __html: this.props.desc}}></p>
      </StoryItems>
    );
  }
}
 
export default StoryItem;