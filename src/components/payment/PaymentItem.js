import React, { Component } from 'react'
import styled from 'styled-components'

const PaymentItems = styled.div`
  text-align: center;
  margin-bottom: 32px;
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
  }
`

class PaymentItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <PaymentItems>
                <h3>{this.props.title}</h3>
                <p>{this.props.desc}</p>
            </PaymentItems>
        );
    }
}
 
export default PaymentItem;