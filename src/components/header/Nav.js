import React, { Component } from 'react';
import styled from 'styled-components';
import Btn from './Btn';

const SiteNav = styled.nav`
    @media (max-width: 980px) {
        width: 108px;
        height: 100vh;
        box-sizing: border-box;
        padding-top: 64px;
        background-color: #fff;
        position: fixed;
        right: 0;
        top: 0;
        display: flex;
        flex-wrap: wrap;
        align-content: start;
        box-shadow: 0 0 24px rgba(0,0,0,0.15);
        transform: translate3d(100%,0,0);
        transition: all 500ms ease-in-out;
        &.is-active {
            transform: translate3d(0,0,0);
        }
    }
`

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navName: [
                {
                    name: '產品介紹',
                    url: '#product'
                },{
                    name: '訂購方式',
                    url: '#howtobuy'
                },{
                    name: '付款方式',
                    url: '#payment'
                },{
                    name: '品牌故事',
                    url: '#story'
                },{
                    name: '製作流程',
                    url: '#flow'
                },{
                    name: '問與答',
                    url: '#qa'
                },{
                    name: '注意事項',
                    url: '#remind'
                },{
                    name: '退貨須知',
                    url: '#return'
                }
            ]
        }
    }
    render() { 
        return (
            <SiteNav id='siteNav'>
                {
                    this.state.navName.map((el,index)=>{
                        return <Btn key={index} name={el.name} url={el.url} hideNav={this.props.hideNav}></Btn>
                    })
                }
            </SiteNav>
        );
    }
}
 
export default Nav;