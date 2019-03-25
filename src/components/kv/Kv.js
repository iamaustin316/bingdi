import React, { Component } from 'react';
import styled from 'styled-components';
import kvImg from '../../images/kv.jpg'
import kvImgM from '../../images/kv-m.jpg'

const KvSection = styled.section`
    width: 100%;
    position: relative;
    z-index: 1;
    img {
        max-width: 100%;
        height: 0 auto;
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
    h2 {
        font-size: 28px;
        font-weight: 500;
        color: #4b3b2f;
        letter-spacing: 10px;
        line-height: 1.6;
        margin: 0 0 8px;
        strong {
            display: block;
        }
        @media (max-width: 800px) {
            font-size: 20px;
        }
    }
    button {
        border: solid 1px #4b3b2f;
        display: inline-block;
        padding: 0 64px;
        background-color: transparent;
        height: 48px;
        line-height: 48px;
        font-size: 16px;
        @media (max-width: 800px) {
            height: 40px;
            line-height: 40px;
            padding: 0 32px;
        }
    }
`

class Kv extends Component {
    state = {  }
    render() { 
        return (
            <KvSection>
                <KvHeading>
                    <h2>回甘的咖啡<strong>要用時間來等待</strong></h2>
                    <button type="button">馬上體驗</button>
                </KvHeading>
                <picture>
                    <source srcSet={kvImgM} media="(max-width: 50em) and (orientation: portrait)" />
                    <img src={kvImg} alt="My default image" />
                </picture>
            </KvSection>
        );
    }
}
 
export default Kv;