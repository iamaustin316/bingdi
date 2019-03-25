import React, { Component } from 'react';
import styled from 'styled-components';

const TitleText = styled.div`
    margin-bottom: 40px;
    h2 {
        font-size: 24px;
        color: #fff;
        text-align: center;
        margin: 0 0 8px;
        padding: 0;
    }
    p {
        margin: 0;
        padding: 0;
        font-size: 14px;
        color: #fff;
        text-align: center;
        text-transform: uppercase;
    }
`

class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <TitleText>
                <h2>{this.props.title}</h2>
                <p>{this.props.desc}</p>
            </TitleText>
        );
    }
}
 
export default Title;