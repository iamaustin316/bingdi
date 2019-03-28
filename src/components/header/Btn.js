import React, { Component } from 'react';
import styled from 'styled-components';
import ScrollPageTo from '../ScrollPageTop'

const ALink = styled.a`
    font-size: 12px;
    color: #4b3b2f;
    text-decoration: none;
    margin: 0 16px;
    vertical-align: middle;
    line-height: 48px;
    transition: all 500ms ease-in;
    border-bottom: solid 1px transparent;
    padding: 4px 0;
    &:hover {
        color: #29190d;
        border-bottom-color: #29190d;
    }
    @media (max-width: 980px) {
        margin: 0 8px;
        display: block;
        width: 100%;
        text-align: center;
        line-height: 40px;
    }
    &.is-active {
        border-bottom-color: #29190d;
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