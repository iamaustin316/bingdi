import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Header from './components/header/Header'
import Kv from './components/kv/Kv'
import Product from './components/prodcut/Product'
import QA from './components/qa/QA'
import HowToBuy from './components/buy/HowToBuy'
import Payment from './components/payment/Payment'
import Story from './components/story/Story'
import ProcessFlow from './components/ProcessFlow/ProcessFlow'
import Remind from './components/remind/Remind'
import ReturnPolicy from './components/returnPolicy/ReturnPolicy'
import Terms from './components/terms/Terms'
import Disclaimer from './components/disclaimer/Disclaimer'
import Footer from './components/footer/Footer'
import Normalize from 'normalize.css'
import baseCss from './css/App.css'
import styled from 'styled-components';
import ScrollPageTo from './components/ScrollPageTop'
import _ from 'lodash'
import Popup from './components/Popup'
import StepImg1 from './images/flow-step-01.jpg'

const BtnTop = styled.button`
    z-index: 100;
    width: 40px;
    height: 40px;
    background-color: #fff;
    position: fixed;
    right: 16px;
    bottom: 0;
    border-radius: 50%;
    border: 0;
    transition: all 500ms ease-in-out;
    transform: translate3d(0,80px,0);
    &.is-active {
        transform: translate3d(0,-40px,0);
    }
    &::before {
        content: "";
        width: 12px;
        height: 2px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-15%,-50%,0) rotate(45deg);
        background-color: #150e0c;
        transform-origin: top center;
    }
    &::after {
        content: "";
        width: 12px;
        height: 2px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-85%,-50%,0) rotate(-45deg);
        background-color: #150e0c;
        transform-origin: top center;
    }
`


class App extends Component {
    state = {
        showPopup: false,
        popupImage: StepImg1
    }
    componentDidMount = () => {
        const btnGoTop = document.querySelector('#btn-top')
        const siteHeader = document.querySelector('#siteHeader')
        const sections = document.querySelectorAll('section')
        window.addEventListener('scroll', _.debounce(
            (e) => {
                if (window.pageYOffset >= 1) {
                    document.body.style.paddingTop = siteHeader.offsetHeight + 'px'
                    siteHeader.classList.add('is-fixed')
                } else {
                    document.body.style.paddingTop = 0
                    siteHeader.classList.remove('is-fixed')
                }
                if (((window.innerHeight + window.pageYOffset) + 100) >= document.body.offsetHeight) {
                    btnGoTop.classList.add('is-active')
                } else {
                    btnGoTop.classList.remove('is-active')
                }
                sections.forEach((section) => {
                    if (section.getBoundingClientRect().top <= window.innerHeight * 0.75 && section.getBoundingClientRect().top > 0) {
                        let btn = document.querySelector(`[href="#${section.id}"]`)
                        if (btn) {
                            btn.classList.add('is-active')
                            let siblings = this.getSiblings(btn);
                            siblings.map((el) => {
                                el.classList.remove('is-active')
                            })
                        }
                    } else {
                        section.classList.remove('in')
                    }
                })
            }
        ))
    }
    getSiblings = (el) => {
        let sibling = el.parentNode.firstChild;
        let siblings = [];
        while (sibling) {
            if (sibling.nodeType === 1 && sibling != el) {
                siblings.push(sibling);
            }
            sibling = sibling.nextSibling;
        }
        return siblings;
    }
    onClickGoTopFN = (event) => {
        event.preventDefault()
        event.stopPropagation()
        let target = document.body
        ScrollPageTo(target, 1600)
        event.target.classList.remove('is-active')
    }
    openPopupFN = (event) => {
        console.log(event.target)
        this.setState({
            showPopup: !this.state.showPopup,
            popupImage: event.target.src
        });
    }
    openCloseFN = () => {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    render() {
        return (
            <div className='wrap'>
                <Header></Header>
                <main>
                    <Kv></Kv>
                    <Product idName='product'></Product>
                    <HowToBuy idName='howtobuy'></HowToBuy>
                    <Payment idName='payment'></Payment>
                    <Story idName='story'></Story>
                    <ProcessFlow idName='flow' clickShow={this.openPopupFN}></ProcessFlow>
                    <QA idName='qa'></QA>
                    <Remind idName='remind'></Remind>
                    <ReturnPolicy idName='return'></ReturnPolicy>
                    <Terms idName='terms'></Terms>
                    <Disclaimer idName='disclaimer'></Disclaimer>
                </main>
                <Footer></Footer>
                <Popup show={this.state.showPopup} closeFN={this.openCloseFN} imageName={this.state.popupImage}></Popup>
                <BtnTop id="btn-top" onClick={this.onClickGoTopFN}></BtnTop>
            </div>
        );
    }
}

ReactDOM.render(<App></App>, document.querySelector('#app'))