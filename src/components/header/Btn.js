import React, { Component } from 'react';
import styled from 'styled-components';

const ALink = styled.a`
    font-size: 14px;
    color: #666;
    text-decoration: none;
    padding: 0 16px;
    vertical-align: middle;
    line-height: 48px;
    transition: all 300ms ease-in;
    &:hover {
        color: #333;
    }
`

class Btn extends Component {
    constructor(props) {
        super(props)
    }
    render() { 
        return (
            <ALink href={this.props.url}>{this.props.name}</ALink>
        );
    }
}
 
export default Btn;