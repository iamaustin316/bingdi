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

const ElementTable = styled.table`
  width: 560px;
  margin: 0 auto;
  border-collapse: collapse;
  th {
    width: 50%; 
    color: #000;
    font-size: 14px;
    border: solid 1px #a18d7a;
    padding: 8px 16px;
    background-color: #a18d7a;
  }
  td {
    border: solid 1px #a18d7a;
    padding: 8px 16px;
    color: #fff;
    font-size: 14px;
    text-align: center;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`

const ElementText = styled.p`
  color: #fff;
  font-size: 14px;
  line-height: 1.6;
  letter-spacing: 1px;
`

class PopupTable extends Component {
  constructor (props) {
    super(props);
    this.state = {
      table: this.props.table
    }
  }
  
  render () { 
    return (
      <PopupUI showPopup={this.props.show}>
        <CloseBtn onClick={this.props.closeFN}></CloseBtn>
        <div className='inner'>
          <ElementText>每一份量300毫升，本包裝含3份</ElementText>
          <ElementTable>
            <thead>
              <tr>
                <th>成分</th>
                <th>每100毫升</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.elements[0][this.props.table].map((el, index)=>{
                  return <tr key={index}>
                    <td>{el.name}</td>
                    <td>{el.value}</td>
                  </tr>
                })
              }
            </tbody>
          </ElementTable>
          <ElementText>每日參考值：熱量2000大卡、蛋白質60公克、脂肪60公克、飽和脂肪18公克、碳水化合物300公克、鈉2000毫克。(標示””＊””為營養素其參考值尚未訂定。)</ElementText>
        </div>
      </PopupUI>
    );
  }
}

export default PopupTable;