import React, { Component } from 'react'
import styled from 'styled-components'

const HowToBuyItem = styled.div`
  width: 50%;
  box-sizing: border-box;
  padding: 0 16px;
  margin-bottom: 32px;
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
    width: 100%;
    margin-bottom: 32px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`
const Icons = styled.div`
  width: 128px;
  height: 128px;
  background-color: #fff;
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
  @media (max-width: 959px) {
    width: 96px;
    height: 96px;
    i {
      font-size: 80px;
    }
  }
`
const Remind = styled.li`
  font-size: 14px;
  color: #d4c7bf;
  line-height: 1.6;
  padding-left: 40px;
  position: relative;
  border-top: solid 1px #41342c;
  padding-top: 16px;
  margin-bottom: 16px;
  letter-spacing: 1px;
  a {
    color: #d4c7bf;
    text-decoration: none;
    border-bottom: solid 1px #d4c7bf;
    transition: all 0.5s ease-in-out;
    &:hover {
      color: #fff;
      border-bottom-color: #fff;
    }
  }
  &:last-child {
    border-bottom: 0;
  }
`

const TypeTitle = styled.strong`
  position: absolute;
  left: 0;
  top: 16px;
  color: #fff;
`

class HowToBuyItems extends Component {
  constructor(props) {
    super(props);
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
              return <Remind key={index}>
                      <TypeTitle>{this.props.type[index]}</TypeTitle>
                        <span dangerouslySetInnerHTML={{ __html: el}}></span>
                      </Remind>
            })
          }
        </ul>
      </HowToBuyItem>
    );
  }
}
 
export default HowToBuyItems;