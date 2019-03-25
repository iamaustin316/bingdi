import React, { Component } from 'react';
import styled from 'styled-components';

const ProductItem = styled.div`
    width: 25%;
    img {
        max-width: 80%;
        display: block;
        margin: 0 auto 16px auto;
    }
    h2 {
        font-size: 24px;
        color: #fff;
        text-align: center;
        margin: 0 0 8px;
        padding: 0;
    }
    p {
        font-size: 14px;
        color: #a18d7a;
        text-align: center;
        margin: 0 0 8px;
        padding: 0;
    }
    @media (max-width: 800px) {
        width: 50%;
        margin-bottom: 24px;
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
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 14px;
        color: #fff;
        padding: 0 4px;
    }
    small {
        font-size: 14px;
        position: relative;
        top: -1px;
    }
    span:nth-child(1) {
        text-decoration: line-through;
    }
    span:nth-child(2) {
        font-size: 24px;
    }
`

class Product extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <ProductItem>
                <img src={this.props.imageUrl} alt=""/>
                <h2>{this.props.name}</h2>
                <p>{this.props.desc}</p>
                <PriceItem>
                    <span>${this.props.oriPrice}</span>
                    <span><small>$</small>{this.props.salePrice}</span>
                </PriceItem>
            </ProductItem>
         );
    }
}

export default Product;