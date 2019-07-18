import React, { Component } from 'react';
import styled from 'styled-components';
import kvImg from '../../images/kv.jpg'
import kvImgM from '../../images/kv-m.jpg'
import logoImg from '../../images/bing-di-logo@3x.png'

const KvSection = styled.section`
    width: 100%;
    position: relative;
    z-index: 1;
    box-shadow: 0 20px 56px rgba(0,0,0,0.9);
    img {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 0;
    }
    picture {
        position: relative;
        z-index: 0;
    }
`

const KvHeading = styled.div`
    width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 1;
    transform: translate3d(-50%,-120%,0);
    text-align: center;
    @media (max-width: 800px) {
        transform: translate3d(-50%,-70%,0);
    }
    img {
        width: 200px;
        display: block;
        margin: 0 auto 16px;
        @media (max-width: 800px) {
            width: 160px;
        }
    }
    h2 {
        font-size: 24px;
        font-weight: 500;
        color: #4b3b2f;
        letter-spacing: 10px;
        text-indent: 10px;
        line-height: 1.6;
        margin: 0 0 16px;
        strong {
            display: block;
        }
        @media (max-width: 800px) {
            font-size: 20px;
            letter-spacing: 5px;
        }
    }
    button {
        color: #4b3b2f;
        border: solid 1px #4b3b2f;
        display: inline-block;
        padding: 0 64px;
        background-color: transparent;
        height: 48px;
        line-height: 48px;
        font-size: 16px;
        transition: color 300ms ease-in-out,background-color 100ms ease-in-out;
        cursor: pointer; 
        @media (max-width: 800px) {
            height: 40px;
            line-height: 40px;
            padding: 0 32px;
        }
        &:hover {
            background-color: #4b3b2f;
            color: #fff;
        }
    }
`

class Kv extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    clickBuyFN = (e)=> {
        console.log(e.target)
        let win = window.open('https://goo.gl/forms/i1EwwtNNC3O28fcg2', '_blank');
        win.focus();
    }
    render() { 
        return (
            <KvSection>
                <KvHeading>
                    <img src={logoImg} alt="冰帝咖啡"/>
                    <h2>網站更新中，造成不便請包涵</h2>
                </KvHeading>
                <picture>
                    <source srcSet={kvImgM} media="(max-width: 59em) and (orientation: portrait)" />
                    <img src={kvImg} alt="冰帝咖啡" />
                </picture>
            </KvSection>
        );
    }
}
 
export default Kv;