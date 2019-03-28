import React, { Component } from 'react';
import styled from 'styled-components';
import Btn from './Btn';

const SiteNav = styled.nav`
    @media (max-width: 980px) {
        width: 120px;
        height: 100vh;
        background-color: #fff;
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        box-shadow: 0 0 24px rgba(0,0,0,0.15);
    }
`

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navName: [
                {
                    name: '商品介紹',
                    url: '#product'
                },
                {
                    name: '訂購方式',
                    url: '#howtobuy'
                }
                ,{
                    name: '付款方式',
                    url: '#payment'
                },{
                    name: '品牌故事 ',
                    url: '#story'
                },{
                    name: '問與答 ',
                    url: '#qma'
                },{
                    name: '注意事項',
                    url: '#remind'
                }
            ]
        }
    }
    render() { 
        return (
            <SiteNav>
                {
                    this.state.navName.map((el,index)=>{
                        return <Btn key={index} name={el.name} url={el.url}></Btn>
                    })
                }
            </SiteNav>
        );
    }
}
 
export default Nav;