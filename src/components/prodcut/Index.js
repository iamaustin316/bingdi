import React, { Component } from 'react'
import styled from 'styled-components';
import Prodcut from './Product'
import Title from '../Title'
import productImage1 from '../../images/product-1.png'
import productImage2 from '../../images/product-2.png'
import productImage3 from '../../images/product-3.png'
import productImage4 from '../../images/product-4.png'

const ProductWrap = styled.div`
    background-color: #2e251d;
    padding: 80px 0;
`

const ProductInner = styled.div`
    max-width: 1200px;
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
                    desc: '北義咖啡豆',
                    oriPrice: '200',
                    salePrice: '150'
                },{
                    imageUrl: productImage2,
                    name: '水果冰滴',
                    desc: '北義咖啡豆',
                    oriPrice: '200',
                    salePrice: '150'
                },{
                    imageUrl: productImage3,
                    name: '拿鐵冰滴',
                    desc: '北義咖啡豆',
                    oriPrice: '200',
                    salePrice: '150'
                },{
                    imageUrl: productImage4,
                    name: '主廚冰滴',
                    desc: '北義咖啡豆',
                    oriPrice: '200',
                    salePrice: '150'
                }
            ]
        }
    }
    render() { 
        return (
            <ProductWrap>
                <Title title="產品介紹" desc="product"></Title>
                <ProductInner>
                {
                    this.state.products.map((el,index)=>{
                        return <Prodcut key={index} imageUrl={el.imageUrl} name={el.name} desc={el.desc} oriPrice={el.oriPrice} salePrice={el.salePrice}></Prodcut>
                    })
                }
                </ProductInner>
            </ProductWrap>
        );
    }
}

export default Index;