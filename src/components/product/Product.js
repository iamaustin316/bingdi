import React, { Component } from 'react'
import styled from 'styled-components';
import ProductItems from './ProductItems'
import Title from '../Title'
import productImage1 from '../../images/product-1.png'
import productImage2 from '../../images/product-2.png'
import productImage3 from '../../images/product-3.png'
import productImage4 from '../../images/product-4.png'
import productImageIll1 from '../../images/product-1-ill.png'
import productImageIll2 from '../../images/product-2-ill.png'
import productImageIll3 from '../../images/product-3-ill.png'
import productImageIll4 from '../../images/product-4-ill.png'
import { SectionBlock, SectionBlockInnerFlex } from '../SectionBlock'
import pdf1 from '../../pdf/JT201904-0140.pdf'
import pdf2 from '../../pdf/JT201904-0141.pdf'
import pdf3 from '../../pdf/JT201904-0142.pdf'
import pdf4 from '../../pdf/JT201904-0143.pdf'


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    imageUrl: productImage1,
                    imgaeIllUrl: productImageIll1,
                    name: '經典冰滴',
                    nameEN: 'Classic Iced Drip Coffee',
                    desc: '肯亞特選豆',
                    ml: '300',
                    oriPrice: '200',
                    salePrice: '150',
                    elementKey: 'classic',
                    pdf: './pdf/JT201904-0140.pdf'
                },{
                    imageUrl: productImage2,
                    imgaeIllUrl: productImageIll2,
                    name: '冰滴拿鐵',
                    nameEN: 'Iced Drip Latte',
                    desc: '肯亞特選豆',
                    ml: '300',
                    oriPrice: '200',
                    salePrice: '150',
                    elementKey: 'latte',
                    pdf: './pdf/JT201904-0141.pdf'
                },{
                    imageUrl: productImage3,
                    imgaeIllUrl: productImageIll3,
                    name: '冰滴蜜咖啡',
                    nameEN: 'Iced Drip Coffee with Honey',
                    desc: '肯亞特選豆',
                    ml: '300',
                    oriPrice: '200',
                    salePrice: '150',
                    elementKey: 'honey',
                    pdf: './pdf/JT201904-0142.pdf'
                },{
                    imageUrl: productImage4,
                    imgaeIllUrl: productImageIll4,
                    name: '果戀冰滴',
                    nameEN: 'Iced Drip Coffee with Fruit',
                    desc: '肯亞特選豆',
                    ml: '300',
                    oriPrice: '180',
                    salePrice: '130',
                    elementKey: 'fruit',
                    pdf: './pdf/JT201904-0143.pdf'
                }
            ]
        }
    }
    render() { 
        return (
            <SectionBlock id={this.props.idName} data-block>
                <Title title="產品介紹" desc="product"></Title>
                <SectionBlockInnerFlex>
                {
                    this.state.products.map((el,index)=>{
                        return <ProductItems key={index} imageUrl={el.imageUrl} imageIllUrl={el.imgaeIllUrl} name={el.name} nameEN={el.nameEN} desc={el.desc} oriPrice={el.oriPrice} salePrice={el.salePrice} ml={el.ml} openFn={this.props.openFn} elementKey={el.elementKey} pdf={el.pdf}></ProductItems>
                    })
                }
                </SectionBlockInnerFlex>
            </SectionBlock>
        );
    }
}

export default Index;