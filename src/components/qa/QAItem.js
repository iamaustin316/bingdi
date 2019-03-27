import React, { Component } from 'react';
import styled from 'styled-components';

const QAItems = styled.div`
    border: solid 1px #736354;
    border-radius: 4px;
    margin-bottom: 16px;
    padding: 16px;
    &:last-child {
        margin-bottom: 0;
    }
`
const QAItemsQuestion = styled.div`
    color: #fff;
    font-size: 14px;
    line-height: 1.6;
    border-bottom: solid 1px #736354;
    padding-bottom: 16px;
    padding-left: 24px;
    margin-bottom: 16px;
    font-weight: 700;
    position: relative;
    word-break: break-all;
    &::before {
        content: "Q";
        position: absolute;
        left: 0;
        top: -1px;
        font-size: 14px;
        color: #fff;
    }
`
const QAItemsAnswer = styled.div`
    color: #d4c7bf;
    font-size: 14px;
    line-height: 1.8;
    position: relative;
    padding-left: 24px;
    word-break: break-all;
    letter-spacing: 1px;
    &::before {
        content: "A";
        position: absolute;
        left: 0;
        top: -1px;
        font-size: 14px;
        color: #d4c7bf;
    }
`
class QAItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <QAItems>
                <QAItemsQuestion>{this.props.question}</QAItemsQuestion>
                <QAItemsAnswer>{this.props.answer}</QAItemsAnswer>
            </QAItems>
        );
    }
}
 
export default QAItem;