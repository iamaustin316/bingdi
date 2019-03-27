import React, { Component } from 'react';
import styled from 'styled-components'

const Links = styled.a`
    width: 36px;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    line-height: 40px;
    height: 36px;
    margin: 0 8px;
    i {
        color: rgba(255,255,255,0.6);
        font-size: 36px;
        transition: color 500ms ease-in-out;
    }
    &:hover {
        i {
            color: rgba(255,255,255,1);
        }
    }
`

class Link extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Links href={this.props.link}>
                <i className={this.props.icon}></i>
            </Links>
        );
    }
}
 
export default Link;