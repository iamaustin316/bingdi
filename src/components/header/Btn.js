import React, { Component } from 'react';
import styled from 'styled-components';
import ScrollPageTo from '../ScrollPageTop'

const ALink = styled.a`
    font-size: 14px;
    color: #4b3b2f;
    text-decoration: none;
    vertical-align: middle;
    line-height: 48px;
    transition: all 500ms ease-in;
    border-bottom: solid 1px transparent;
    padding: 0 16px;
    height: 48px;
    line-height: 48px;
    display: inline-block;
    &:hover {
        color: #fff;
        background-color: #29190d;
    }
    @media (max-width: 980px) {
        width: 100%;
        display: block;
        height: 32px;
        text-align: center;
        line-height: 32px;
    }
    &.is-active {
        color: #fff;
        background-color: #29190d;
    }
`
class Btn extends Component {
    constructor(props) {
        super(props)
        //this.myRef = React.createRef() 
    }
    getSiblings = (el)=> {
        let sibling = el.parentNode.firstChild;
        let siblings = [];
        while (sibling) {
        //節點類型為元素節點 且 sibling不等於自己 就push到siblings
            if (sibling.nodeType === 1 && sibling != el) {
                siblings.push(sibling);
            }
            //找siblings下一個同層元素
            sibling = sibling.nextSibling;
        }
        //執行至無同層元素回傳至陣列
        return siblings;
    }

    btnClickFN = (e)=> {
        e.preventDefault()
        e.stopPropagation()
        e.target.classList.add('is-active')
        let target = document.querySelector(this.props.url)
        ScrollPageTo(target,800)
        this.props.hideNav()
        let siblings = this.getSiblings(e.target);
        siblings.map( (el) => {
            el.classList.remove('is-active')
        })
    }
    render() { 
        return (
            <ALink onClick={this.btnClickFN} href={this.props.url}>{this.props.name}</ALink>
        );
    }
}
 
export default Btn;