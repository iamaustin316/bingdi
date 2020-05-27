import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Loading from './components/Loading'
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
import PopupTable from './components/PopupTable'
import styled from 'styled-components'
import _ from 'lodash'
import './images/fb-cover.jpg'
import './images/favicon.png'
import 'normalize.css'
import './css/App.css'
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
            flowIndex: 0,
            showPopup: false,
            showPopupTable: false,
            popupImage: null,
            elements: [
                {
                    "classic": [
                        {
                            name: "熱量",value: "7.7大卡"
                        },
                        {
                            name: "蛋白質",value: "0.6公克"
                        },
                        {
                            name: "脂肪",value: "0.1公克"
                        },
                        {
                            name: "飽和脂肪酸",value: "0.0公克"
                        },
                        {
                            name: "反式脂肪酸",value: "0.0公克"
                        },
                        {
                            name: "碳水化合物",value: "1.1公克"
                        },
                        {
                            name: "糖",value: "0.0公克"
                        },
                        {
                            name: "鈉",value: "0毫克"
                        }
                    ],
                    "latte": [
                        {
                            name: "熱量",value: "37.9大卡"
                        },
                        {
                            name: "蛋白質",value: "2.1公克"
                        },
                        {
                            name: "脂肪",value: "1.9公克"
                        },
                        {
                            name: "飽和脂肪酸",value: "1.2公克"
                        },
                        {
                            name: "反式脂肪酸",value: "0.0公克"
                        },
                        {
                            name: "碳水化合物",value: "3.1公克"
                        },
                        {
                            name: "糖",value: "2.0公克"
                        },
                        {
                            name: "鈉",value: "21毫克"
                        }
                    ],
                    "honey": [
                        {
                            name: "熱量",value: "41.6大卡"
                        },
                        {
                            name: "蛋白質",value: "0.4公克"
                        },
                        {
                            name: "脂肪",value: "0.0公克"
                        },
                        {
                            name: "飽和脂肪酸",value: "0.0公克"
                        },
                        {
                            name: "反式脂肪酸",value: "0.0公克"
                        },
                        {
                            name: "碳水化合物",value: "10.0公克"
                        },
                        {
                            name: "糖",value: "8.5公克"
                        },
                        {
                            name: "鈉",value: "0毫克"
                        }
                    ],
                    "fruit": [
                        {
                            name: "熱量",value: "28.9大卡"
                        },
                        {
                            name: "蛋白質",value: "0.6公克"
                        },
                        {
                            name: "脂肪",value: "0.1公克"
                        },
                        {
                            name: "飽和脂肪酸",value: "0.0公克"
                        },
                        {
                            name: "反式脂肪酸",value: "0.0公克"
                        },
                        {
                            name: "碳水化合物",value: "6.4公克"
                        },
                        {
                            name: "糖",value: "5.6公克"
                        },
                        {
                            name: "鈉",value: "0毫克"
                        }
                    ]
                }
            ],
            defaultTable: 'classic'
        }
    }
    componentDidMount = () => {
        const loading = document.querySelector('#loading')
        loading.classList.add('loaded')
    }
    render() {
        return (
            <div className='wrap'>
                <Loading></Loading>
                <main>
                    <Header></Header>
                    <Kv></Kv>
                    <Product idName='product' openFn={this.openPopupTableFN}></Product>
                    <HowToBuy idName='howtobuy'></HowToBuy>
                    <Payment idName='payment'></Payment>
                    <Story idName='story'></Story>
                    {/* <ProcessFlow idName='flow' clickShow={this.openPopupFN} flowImage={this.state.flowImage}></ProcessFlow> */}
                    <QA idName='qa'></QA>
                    <Remind idName='remind'></Remind>
                    <ReturnPolicy idName='return'></ReturnPolicy>
                    <Terms idName='terms'></Terms>
                    <Disclaimer idName='disclaimer'></Disclaimer>
                </main>
            </div>
        );
    }
}


ReactDOM.render(<App></App>, document.querySelector('#app'))