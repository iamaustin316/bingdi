import React, { Component } from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload'
import { forceCheck } from 'react-lazyload';
import FadeIn from "react-lazyload-fadein";

const ProcessFlowItems = styled.div`
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    img {
        display: block;
        max-width: 100%;
        marign: 0;
        transition: all 500ms ease-in-out;
        z-index: 5;
    }
    &:not(:hover) {
        img {
            filter: grayscale(100%);
        }
    }
    @media (max-width: 959px) {
        &:not(:hover) {
        img {
                filter: grayscale(0);
            }
        }
    }
    &::after {
        counter-increment: items;
        content: 'STEP-'counter(items);
        position: absolute;
        font-size: 12px;
        color: #fff;
        top: 0;
        padding: 0;
        line-height: 8.5;
        left: 50%;
        transform: translate3d(-50%,-50%,0);
        width: 72px;
        height: 72px;
        background-color: #030200;
        border-radius: 50%;
        text-align: center;
        z-index: 10;
    }
    p {
        width: 100%;
        font-size: 14px;
        text-align: center;
        background-color: rgba(255,255,255,0.9);
        position: absolute;
        padding: 8px 0;
        bottom: 0;
        left: 0;
        margin: 0;
        color: #030200;
        z-index: 10;
    }
`
class ProcessFlowItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <ProcessFlowItems>
                <p>{this.props.desc}</p>
                <FadeIn duration={800} easing={'ease-out'}>
                    {onload => (
                        <img
                            src={this.props.stepImg}
                            onLoad={onload}
                            alt={this.props.desc}
                        />
                    )}
                </FadeIn>
                {/* <img src={this.props.stepImg} alt={this.props.desc}/> */}
            </ProcessFlowItems>
        );
    }
}
 
export default ProcessFlowItem;