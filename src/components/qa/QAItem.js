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
    color: #b8a898;
    font-size: 14px;
    line-height: 1.6;
    border-bottom: solid 1px #736354;
    padding-bottom: 8px;
    padding-left: 16px;
    margin-bottom: 8px;
    font-weight: 700;
    position: relative;
    word-break: break-all;
    &::before {
        content: "Q";
        position: absolute;
        left: 0;
        top: 0;
        font-size: 14px;
        color: #b8a898;
    }
`
const QAItemsAnswer = styled.div`
    color: #fff;
    font-size: 14px;
    line-height: 1.6;
    position: relative;
    padding-left: 16px;
    word-break: break-all;
    &::before {
        content: "A";
        position: absolute;
        left: 0;
        top: 0;
        font-size: 14px;
        color: #fff;
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