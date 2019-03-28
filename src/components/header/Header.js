import React, { Component } from 'react';
import Logo from './Logo';
import Nav from './Nav';
import styled from 'styled-components';
import BtnToggle from './BtnToggle'

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
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    transition: all 500ms ease-in-out;
    &.is-fixed {
        position: fixed;
        top: 0;
    }
`

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            logoName: '冰帝咖啡',
            navShowCool: false
        }
    }
    componentDidMount = ()=> {
        const siteNav = document.querySelector('#siteNav')
        const btnToggle = document.querySelector('#btnToggle')
    }
    clickToggleFN = (e) => {
        if(!this.state.navShowCool) {
            e.target.classList.add('is-active')
            siteNav.classList.add('is-active')
            this.setState( state => ({
                navShowCool: true
            }))
        } else {
            e.target.classList.remove('is-active')
            siteNav.classList.remove('is-active')
            this.setState( state => ({
                navShowCool: false
            }))
        } 
    }
    hideNav = ()=> {
        btnToggle.classList.remove('is-active')
        siteNav.classList.remove('is-active')
        this.setState( state => ({
            navShowCool: false
        }))
    }
    render() { 
        return (
            <SiteHeader id='siteHeader'>
                <Logo name={this.state.logoName}></Logo>
                <Nav hideNav={this.hideNav}></Nav>
                <BtnToggle click={this.clickToggleFN}></BtnToggle>
            </SiteHeader>
        );
    }
}
 
export default Header
