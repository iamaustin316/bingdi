import React, { Component } from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    font-size: 16px;
    color: #333;
    height: 48px;
    line-height: 48px;
    margin: 0;
    padding: 0;
`

class Logo extends Component {
    constructor(props) {
        super(props)
    }
    render() { 
        return (
            <H1>{this.props.name}</H1>
        );
    }
}
 
export default Logo;