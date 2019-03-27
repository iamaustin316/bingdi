import React, { Component } from 'react'
import styled from 'styled-components'
import LogoImg from '../../images/bing-di-logo@3x.png'

const H1 = styled.h1`
    font-size: 16px;
    color: #333;
    height: 48px;
    line-height: 48px;
    margin: 0;
    padding: 0;
    img {
        position: relative;
        top: 8px;
        height: 32px;
        display: block;
    }
`

class Logo extends Component {
    constructor(props) {
        super(props)
    }
    render() { 
        return (
            <H1>
                <img src={LogoImg} alt="冰帝咖啡"/>
            </H1>
        );
    }
}
 
export default Logo;