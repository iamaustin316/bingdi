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
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
`

const BtnToggle = styled.button`
    display: none;
    width: 32px;
    height: 32px;
    position: absolute;
    right: 16px;
    top: 8px;
    background-color: transparent;
    border: 0;
    transition: all 500ms ease-in-out;
    @media (max-width: 980px) {
       display: block;
    }
    &::before {
        content: "";
        width: 24px;
        height: 2px;
        background-color: #666;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%,-200%,0) rotate(-0);
        transform-origin: center;
        transition: all 300ms ease-in-out;
    }
    &::after {
        content: "";
        width: 24px;
        height: 2px;
        background-color: #666;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%,100%,0);
        transform-origin: center;
        transition: all 300ms ease-in-out;
    }
    &.is-active {
        &::before {
            transform: translate3d(-50%,-50%,0);
        }
        &::after {
            transform: translate3d(-50%,-50%,0);
        }
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
        const btnToggle = document.querySelector('#btn-toggle')
        
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
        console.log(btnToggle)
        console.log(siteNav)
        btnToggle.classList.remove('is-active')
        siteNav.classList.remove('is-active')
        this.setState( state => ({
            navShowCool: false
        }))
    }
    render() { 
        return (
            <SiteHeader>
                <Logo name={this.state.logoName}></Logo>
                <Nav hideNav={this.hideNav}></Nav>
                <BtnToggle id="btn-toggle" onClick={this.clickToggleFN}></BtnToggle>
            </SiteHeader>
        );
    }
}
 
export default Header
