import React, { Component } from 'react'
import styled from 'styled-components'
import Link from './Link'

const Footers = styled.footer`
    background-color: #030200;
    padding: 16px 0;
    p {
        text-align: center;
        color: #fff;
        font-size: 12px;
    }
    & > div {
        text-align: center;
    }
`

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            socialLink: [
                {
                    icon: 'icon-fb',
                    link: 'https://www.facebook.com/C.M.BINGDI/',
                },
                {
                    icon: 'icon-line',
                    link: 'http://line.me/ti/p/%40hii3240r',
                },
                {
                    icon: 'icon-mail',
                    link: 'mailto:chiminbingdi.ltd@gmail.com',
                },
                {
                    icon: 'icon-ig',
                    link: 'https://www.instagram.com/c.m.bingdi/',
                },
                {
                    icon: 'icon-phone',
                    link: '02-55994585#100',
                }
            ]
        }
    }
    render() { 
        return (
            <Footers>
                <div>
                    {
                        this.state.socialLink.map((el, index) => {
                            return <Link key={index} icon={el.icon} link={el.link}></Link>
                        })
                    }
                </div>
                <p>Copyright © 2019 C.M BINGDI 版權所有</p>
            </Footers>
        );
    }
}
 
export default Footer;