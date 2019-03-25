import React, { Component } from 'react';
import styled from 'styled-components';
import kvImg from '../../images/kv.jpg'
import kvImgM from '../../images/kv-m.jpg'

const KvSection = styled.section`
    width: 100%;
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
            <div>
                <KvSection>
                    <picture>
                        <source srcSet={kvImgM} media="(max-width: 50em) and (orientation: portrait)" />
                        <img src={kvImg} alt="My default image" />
                    </picture>
                </KvSection>
            </div>
        );
    }
}
 
export default Kv;