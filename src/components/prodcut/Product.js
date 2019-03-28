import React, { Component } from 'react'
import styled from 'styled-components';
import ProductItems from './ProductItems'
import Title from '../Title'
import productImage1 from '../../images/product-1.png'
import productImage2 from '../../images/product-2.png'
import productImage3 from '../../images/product-3.png'
import productImage4 from '../../images/product-4.png'

const ProductWrap = styled.section`
    padding: 80px 0;
`

const ProductInner = styled.div`
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    @media (max-width: 800px) {
        flex-wrap: wrap;
        width: auto;
        padding: 0 16px;
    }
`

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    imageUrl: productImage1,
                    name: '經典冰滴',
                    desc: '肯亞特選豆',
                    ml: '300',
                    oriPrice: '200',
                    salePrice: '150'
                },{
                    imageUrl: productImage2,
                    name: '冰滴拿鐵',
                    desc: '肯亞特選豆',
                    ml: '300',
                    oriPrice: '200',
                    salePrice: '150'
                },{
                    imageUrl: productImage3,
                    name: '冰滴蜜咖啡',
                    desc: '肯亞特選豆',
                    ml: '300',
                    oriPrice: '200',
                    salePrice: '150'
                },{
                    imageUrl: productImage4,
                    name: '果戀冰滴',
                    desc: '肯亞特選豆',
                    ml: '300',
                    oriPrice: '180',
                    salePrice: '130'
                }
            ]
        }
    }
    render() { 
        return (
            <ProductWrap id={this.props.idName}>
                <Title title="產品介紹" desc="product"></Title>
                <ProductInner>
                {
                    this.state.products.map((el,index)=>{
                        return <ProductItems key={index} imageUrl={el.imageUrl} name={el.name} desc={el.desc} oriPrice={el.oriPrice} salePrice={el.salePrice} ml={el.ml}></ProductItems>
                    })
                }
                </ProductInner>
            </ProductWrap>
        );
    }
}

export default Index;