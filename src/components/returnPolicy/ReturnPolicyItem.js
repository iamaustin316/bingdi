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
    & > ul {
        list-style-type: cjk-ideographic;
        padding-left: 24px;
    }
`

const ListInner = styled.li`
    font-size: 14px;
    line-height: 1.8;
    color: #d4c7bf;
    text-align: left;
    letter-spacing: 1px;
    position: relative;
`

class ReturnPolicyItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <List>
                <span>{this.props.text}</span>
                <ul>{
                    this.props.detail.map((el, index) => {
                        return <ListInner key={index}>{el}</ListInner>
                    })
                }
                </ul>
            </List>
        );
    }
}
 
export default ReturnPolicyItem;