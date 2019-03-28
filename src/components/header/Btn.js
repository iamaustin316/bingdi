import React, { Component } from 'react';
import styled from 'styled-components';

const ALink = styled.a`
    font-size: 12px;
    color: #666;
    text-decoration: none;
    padding: 0 16px;
    vertical-align: middle;
    line-height: 48px;
    transition: all 300ms ease-in;
    &:hover {
        color: #333;
    }
    @media (max-width: 980px) {
       padding: 0 8px;
       display: block;
       width: 100%;
       text-align: center;
    }
`

class Btn extends Component {
    constructor(props) {
        super(props)
    }
    btnClickFN = (event)=>{
        event.preventDefault()
        event.stopPropagation()
        console.log(this.props.url)
    }
    render() { 
        return (
            <ALink onClick={this.btnClickFN} href={this.props.url}>{this.props.name}</ALink>
        );
    }
}
 
export default Btn;