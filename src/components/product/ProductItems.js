import React, { Component } from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload'

const ProductItem = styled.div`
    width: 25%;
    position: relative;
    text-align: center;
    & > img {
        display: none;
        width: 96px;
        position: absolute;
        left: 50%;
        transform: translate3d(30%,80%,0);
        top: 0;
        z-index: 0;
    }
    h2 {
        font-size: 20px;
        color: #fff;
        text-align: center;
        margin: 0;
        padding: 0;
        line-height: 1.6;
    }
    h3 {
        font-size: 12px;
        color: #fff;
        margin: 0 0 8px;
        line-height: 1.6;
        text-align: center;
        font-weight: 500;
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
    @media (max-width: 959px) {
        width: 50%;
        margin-bottom: 24px;
        h2 {
            font-size: 20px;
        }
        &:nth-child(3),
        &:nth-child(4) {
            margin-bottom: 0;
        }
        & > img {
            width: 62px;
            transform: translate3d(40%,80%,0);
        }
    }
`

const PriceItem = styled.div`
    text-align: center;
    margin-bottom: 16px;
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

const ProductImg = styled.div`
    position: relative;
    z-index: 1;
    img {
        cursor: pointer;
        max-width: 80px;
        display: block;
        margin: 0 auto 32px auto;
        transition: transform 800ms ease-in-out;
    }
    &:hover {
        img {
            transform: translateY(-3%);
        }
    }
    @media (max-width: 800px) {
        img {
            max-width: 60px;
        }
    }
`

const ReportBtn = styled.a`
    box-sizing: border-box;
    display: block;
    background-color: #111;
    padding: 8px 16px;
    color: #ceb29d;
    font-size: 14px;
    display: inline-block;
    text-decoration: none;
    transition: color 300ms ease-in-out;
    box-shadow: 0 1px 0 rgba(255,255,255,0.2);
    &:hover {
        color: #fff;
    }
`

class ProductItems extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <ProductItem>
                <LazyLoad><img src={this.props.imageIllUrl} alt={this.props.name}/></LazyLoad>
                <ProductImg onClick={this.props.openFn}>
                    <LazyLoad><img src={this.props.imageUrl} alt={this.props.name} data-table={this.props.elementKey}/></LazyLoad>
                </ProductImg>
                <h2>{this.props.name}</h2>
                <h3>{this.props.nameEN}</h3>
                <p><span>{this.props.ml}ml</span></p>
                <PriceItem>
                    <span><small>原價：$</small>{this.props.oriPrice}</span>
                    <span><small>促銷價：$</small>{this.props.salePrice}</span>
                </PriceItem>
                <ReportBtn href={this.props.pdf} target='_blank' download={this.props.name + '檢測報告.pdf'}>商品檢測報告下載</ReportBtn>
            </ProductItem>
        );
    }
}

export default ProductItems;