import React, { Component } from 'react';
import Logo from './Logo';
import Nav from './Nav';
import styled from 'styled-components';

const SiteHeader = styled.div`
    width: 100%;
    height: 48px;
    background-color: #f6f6f6;
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    box-sizing: border-box;
    position: relative;
    z-index: 4;
`

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            logoName: 'Austin'
        }
    }
    render() { 
        return (
            <SiteHeader>
                <Logo name={this.state.logoName}></Logo>
                <Nav></Nav>
            </SiteHeader>
        );
    }
}
 
export default Header
