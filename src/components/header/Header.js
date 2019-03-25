import React, { Component } from 'react';
import Logo from './Logo';
import Nav from './Nav';
import styled from 'styled-components';

const SiteHeader = styled.div`
    width: 100%;
    height: 48px;
    background-color: #eee;
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    box-sizing: border-box;
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
