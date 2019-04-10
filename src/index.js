import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Header from './components/header/Header'
import Kv from './components/kv/Kv'
import Product from './components/product/Product'
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
import ScrollPageTo from './components/ScrollPageTop'
import Popup from './components/Popup'
import styled from 'styled-components';
import _ from 'lodash'
import 'normalize.css'
import './css/App.css'
import flowImage1 from './images/flow-step-01.jpg'
import flowImage2 from './images/flow-step-02.jpg'
import flowImage3 from './images/flow-step-03.jpg'
import flowImage4 from './images/flow-step-04.jpg'
import flowImage5 from './images/flow-step-05.jpg'
import flowImage6 from './images/flow-step-06.jpg'
import flowImage7 from './images/flow-step-07.jpg'
import flowImage8 from './images/flow-step-08.jpg'
import flowImage9 from './images/flow-step-09.jpg'
import flowImage10 from './images/flow-step-10.jpg'
import flowImage11 from './images/flow-step-11.jpg'
import flowImage12 from './images/flow-step-12.jpg'
import flowImage13 from './images/flow-step-13.jpg'
import flowImage14 from './images/flow-step-14.jpg'
import flowImage15 from './images/flow-step-15.jpg'
import flowImage16 from './images/flow-step-16.jpg'
import flowImage17 from './images/flow-step-17.jpg'

const BtnTop = styled.button`
    z-index: 100;
    width: 32px;
    height: 32px;
    background-color: #fff;
    position: fixed;
    right: 16px;
    bottom: 0;
    border-radius: 50%;
    border: 0;
    transition: all 500ms ease-in-out;
    transform: translate3d(0,80px,0);
    &.is-active {
        transform: translate3d(0,-24px,0);
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
    constructor(props) {
        super(props);
        this.state = {
            flowImage: [
                flowImage1,
                flowImage2,
                flowImage3,
                flowImage4,
                flowImage5,
                flowImage6,
                flowImage7,
                flowImage8,
                flowImage9,
                flowImage10,
                flowImage11,
                flowImage12,
                flowImage13,
                flowImage14,
                flowImage15,
                flowImage16,
                flowImage17
            ],
            flowIndex: 0,
            showPopup: false,
            popupImage: null
        }
    }
    componentDidMount = () => {
        const btnGoTop = document.querySelector('#btn-top')
        const siteHeader = document.querySelector('#siteHeader')
        const sections = document.querySelectorAll('section')
        const flowImageWarp = document.querySelector('#flowImageWarp')
        this.setState({
            popupImage: this.state.flowImage[this.state.flowIndex]
        })
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
        this.setState({
            showPopup: !this.state.showPopup,
            popupImage: event.target.src,
            flowIndex: Number(event.target.dataset.index)
        });
    }
    onClickSwitch = (e) => {
        flowImageWarp.classList.add('is-hide')
        let btnTarget = e.target
        let removeTransition = (e)=> {
            flowImageWarp.removeEventListener('transitionend',removeTransition,false)
            if(e.propertyName !== 'opacity') return;
            if(btnTarget.dataset.name === 'next') {
                if(this.state.flowIndex < (this.state.flowImage.length - 1)) {
                    this.setState({
                        flowIndex: this.state.flowIndex + 1,
                        popupImage: this.state.flowImage[this.state.flowIndex + 1]
                    });
                } else {
                    this.setState({
                        flowIndex: this.state.flowImage.length - 1,
                        popupImage: this.state.flowImage[this.state.flowIndex]
                    });
                }    
            } else {
                if(this.state.flowIndex === 0) {
                    this.setState({
                        flowIndex: 0,
                        popupImage: this.state.flowImage[this.state.flowIndex]
                    });
                } else {
                    this.setState({
                        flowIndex: this.state.flowIndex - 1,
                        popupImage: this.state.flowImage[this.state.flowIndex - 1]
                    });
                }
            }
             flowImageWarp.classList.remove('is-hide');
        }
        flowImageWarp.addEventListener('transitionend',removeTransition,false)
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
                    <ProcessFlow idName='flow' clickShow={this.openPopupFN} flowImage={this.state.flowImage}></ProcessFlow>
                    <QA idName='qa'></QA>
                    <Remind idName='remind'></Remind>
                    <ReturnPolicy idName='return'></ReturnPolicy>
                    <Terms idName='terms'></Terms>
                    <Disclaimer idName='disclaimer'></Disclaimer>
                </main>
                <Footer></Footer>
                <Popup show={this.state.showPopup} closeFN={this.openCloseFN} imageName={this.state.popupImage} onClickSwitch={this.onClickSwitch}></Popup>
                <BtnTop id="btn-top" onClick={this.onClickGoTopFN}></BtnTop>
            </div>
        );
    }
}


ReactDOM.render(<App></App>, document.querySelector('#app'))