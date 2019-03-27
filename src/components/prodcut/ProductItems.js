import React, { Component } from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload'

const ProductItem = styled.div`
    width: 25%;
    position: relative;
    &::before {
        content: "";
        background: radial-gradient(ellipse at center, #6e534b 0%,#1b110e 70%);
        width: 200px;
        height: 200px;
        position: absolute;
        border-radius: 50%;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%,-84%,0);
        z-index: -1;
    }
    img {
        max-width: 80px;
        display: block;
        margin: 0 auto 32px auto;
    }
    h2 {
        font-size: 20px;
        color: #fff;
        text-align: center;
        margin: 0 0 8px;
        padding: 0;
    }
    p {
        font-size: 12px;
        color: #a18d7a;
        text-align: center;
        margin: 0 0 8px;
        padding: 0;
        span {
            padding: 0 4px;
        }
    }
    @media (max-width: 800px) {
        width: 50%;
        margin-bottom: 24px;
        img {
            max-width: 60px;
        }
        h2 {
            font-size: 20px;
        }
        &:nth-child(3),
        &:nth-child(4) {
            margin-bottom: 0;
        }
    }
`

const PriceItem = styled.div`
    text-align: center;
    span {
        font-size: 14px;
        color: #fff;
        padding: 0 4px;
        display: block;
    }
    small {
        font-size: 14px;
        position: relative;
        top: -1px;
    }
    span:nth-child(1) {
        text-decoration: line-through;
        margin-bottom: 8px;
    }
    span:nth-child(2) {
        font-size: 24px;
    }
`

class ProductItems extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <ProductItem>
                <LazyLoad><img src={this.props.imageUrl} alt={this.props.name}/></LazyLoad>
                <h2>{this.props.name}</h2>
                <p><span>{this.props.desc}</span><span>{this.props.ml}ml</span></p>
                <PriceItem>
                    <span>${this.props.oriPrice}</span>
                    <span><small>$</small>{this.props.salePrice}</span>
                </PriceItem>
            </ProductItem>
        );
    }
}

export default ProductItems;