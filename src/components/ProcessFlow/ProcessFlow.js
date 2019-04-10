import React, { Component } from 'react';
import styled from 'styled-components';
import ProcessFlowItem from './ProcessFlowItem';
import Title from '../Title'
import { SectionBlock, SectionBlockInner } from '../SectionBlock'

const GridWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    counter-reset: items;
    @media (max-width: 959px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
    }
    &:hover > div:not(:hover) {
        filter: grayscale(100%);
        img {
            transform: scale(1)
        }
    }
    &:hover {
        img {
            transform: scale(1.1)
        }
    }
`

class ProcessFlow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flowStep: [
                {
                    desc: '生豆秤重'
                },
                {
                    desc: '倒入烘豆機'
                },
                {
                    desc: '依指定溫度、時間烘豆'
                },
                {
                    desc: '檢視烘焙程度'
                },
                {
                    desc: '出豆(散熱)'
                },
                {
                    desc: '熟豆秤重'
                },
                {
                    desc: '研磨咖啡豆'
                },
                {
                    desc: '萃取器倒入咖啡粉'
                },
                {
                    desc: '上壺裝填冰塊'
                },
                {
                    desc: '倒入少量冰水'
                },
                {
                    desc: '調整流速調節器'
                },
                {
                    desc: '7-9小時萃取'
                },
                {
                    desc: '封瓶置入冰箱'
                },
                {
                    desc: '冷藏醞釀3-5日'
                },
                {
                    desc: '檢測濃度及萃取率'
                },
                {
                    desc: '封杯，裝瓶'
                },
                {
                    desc: '出單，顧客享用幸福冰帝'
                }
            ]
        }
    }
    render() { 
        return (
            <SectionBlock id={this.props.idName} data-block>
                <Title title="製作流程" desc="Process Flow"></Title>
                <SectionBlockInner>
                    <GridWrap>
                        {
                            this.state.flowStep.map((el,index)=>{
                                return <ProcessFlowItem onClickFN={this.props.clickShow} key={index} imgIndex={index} stepImg={this.props.flowImage[index]} desc={el.desc}></ProcessFlowItem>
                            })
                        }
                    </GridWrap>
                </SectionBlockInner>
            </SectionBlock>
        );
    }
}
 
export default ProcessFlow;