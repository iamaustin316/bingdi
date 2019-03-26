import React, { Component } from 'react';
import styled from 'styled-components';

const HowToBuyItem = styled.div`
  width: 25%;
  box-sizing: border-box;
  padding: 0 16px;
  h3 {
    font-size: 20px;
    text-align: center;
    color: #fff;
    margin: 0 0 16px;
    padding: 0;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  @media (max-width: 980px) {
    width: 50%;
    margin-bottom: 32px;
    &:nth-child(3),
    &:nth-child(4) {
      margin-bottom: 0;
    }
  }
`
const Icons = styled.div`
  width: 128px;
  height: 128px;
  background-color: #564337;
  border-radius: 50%;
  margin: 0 auto 16px;
  display: flex;
  justify-content: center;
  align-items: center; 
  i {
    font-size: 108px;
    color: #231913;
    text-align: center;
  }
`
const Remind = styled.li`
  font-size: 12px;
  color: #fff;
  line-height: 1.6;
  padding-left: 32px;
  position: relative;
  border-top: solid 1px #695346;
  padding-top: 8px;
  margin-bottom: 8px;
  &:last-child {
    border-bottom: 0;
  }
`

const TypeTitle = styled.strong`
  position: absolute;
  left: 0;
  top: 8px;
  color: #a28f84;
`

class HowToBuyItems extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <HowToBuyItem>
        <Icons>
          <i className={this.props.iconName}></i>
        </Icons>
        <h3>{this.props.name}</h3>
        <ul>
          {
            this.props.remind.map((el,index)=>{
              return <Remind key={index}><TypeTitle>{this.props.type[index]}</TypeTitle>{el}</Remind>
            })
          }
        </ul>
      </HowToBuyItem>
    );
  }
}
 
export default HowToBuyItems;