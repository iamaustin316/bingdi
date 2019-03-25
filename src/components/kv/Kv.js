import React, { Component } from 'react';
import styled from 'styled-components';
import kvImg from '../../images/kv.jpg'
import kvImgM from '../../images/kv-m.jpg'

const KvSection = styled.section`
    width: 100%;
    box-shadow: 0 0 40px rgba(0,0,0,0.7);
    position: relative;
    z-index: 1;
    img {
        max-width: 100%;
        height: 0 auto;
        display: block;
        margin: 0;
    }
`

class Kv extends Component {
    state = {  }
    render() { 
        return (
            <KvSection>
                <picture>
                    <source srcSet={kvImgM} media="(max-width: 50em) and (orientation: portrait)" />
                    <img src={kvImg} alt="My default image" />
                </picture>
            </KvSection>
        );
    }
}
 
export default Kv;