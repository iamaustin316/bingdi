import React, { Component } from 'react';
import styled from 'styled-components';
import Btn from './Btn';

const SiteNav = styled.nav`
    
`

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navName: [
                {
                    name: '關於我們',
                    url: '#about'
                },
                {
                    name: '產品介紹',
                    url: '#product'
                }
                ,{
                    name: '問與答',
                    url: '#qa'
                },{
                    name: '聯絡我們',
                    url: '#contact'
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