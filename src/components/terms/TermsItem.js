import React, { Component } from 'react'
import styled from 'styled-components'

const List = styled.li`
    font-size: 14px;
    line-height: 1.8;
    color: #d4c7bf;
    text-align: left;
    letter-spacing: 1px;
    position: relative;
    padding-left: 24px;
    margin-bottom: 8px;
    &::before {
        counter-increment: list;
        content: counter(list);
        color: #d4c7bf;
        position: absolute;
        top: 0;
        left: 0;
    }
`

class TermsItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <List dangerouslySetInnerHTML={{ __html: this.props.rule}}></List>
        );
    }
}
 
export default TermsItem;