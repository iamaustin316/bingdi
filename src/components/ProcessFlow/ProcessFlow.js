import React, { Component } from 'react';
import styled from 'styled-components';
import ProcessFlowItem from './ProcessFlowItem';
import Title from '../Title'
import { SectionBlock, SectionBlockInner } from '../SectionBlock'
import StepImg1 from '../../images/flow-step-01.jpg'
import StepImg2 from '../../images/flow-step-02.jpg'
import StepImg3 from '../../images/flow-step-03.jpg'
import StepImg4 from '../../images/flow-step-04.jpg'
import StepImg5 from '../../images/flow-step-05.jpg'
import StepImg6 from '../../images/flow-step-06.jpg'
import StepImg7 from '../../images/flow-step-07.jpg'
import StepImg8 from '../../images/flow-step-08.jpg'
import StepImg9 from '../../images/flow-step-09.jpg'
import StepImg10 from '../../images/flow-step-10.jpg'
import StepImg11 from '../../images/flow-step-11.jpg'
import StepImg12 from '../../images/flow-step-12.jpg'
import StepImg13 from '../../images/flow-step-13.jpg'
import StepImg14 from '../../images/flow-step-14.jpg'
import StepImg15 from '../../images/flow-step-15.jpg'
import StepImg16 from '../../images/flow-step-16.jpg'
import StepImg17 from '../../images/flow-step-17.jpg'

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
`

class ProcessFlow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flowStep: [
                {
                    stepImg: StepImg1,
                    desc: '生豆秤重'
                },
                {
                    stepImg: StepImg2,
                    desc: '倒入烘豆機'
                },
                {
                    stepImg: StepImg3,
                    desc: '依指定溫度、時間烘豆'
                },
                {
                    stepImg: StepImg4,
                    desc: '檢視烘焙程度'
                },
                {
                    stepImg: StepImg5,
                    desc: '出豆(散熱)'
                },
                {
                    stepImg: StepImg6,
                    desc: '熟豆秤重'
                },
                {
                    stepImg: StepImg7,
                    desc: '研磨咖啡豆'
                },
                {
                    stepImg: StepImg8,
                    desc: '萃取器倒入咖啡粉'
                },
                {
                    stepImg: StepImg9,
                    desc: '上壺裝填冰塊'
                },
                {
                    stepImg: StepImg10,
                    desc: '倒入少量冰水'
                },
                {
                    stepImg: StepImg11,
                    desc: '調整流速調節器'
                },
                {
                    stepImg: StepImg12,
                    desc: '7-9小時萃取'
                },
                {
                    stepImg: StepImg13,
                    desc: '封瓶置入冰箱'
                },
                {
                    stepImg: StepImg14,
                    desc: '冷藏醞釀3-5日'
                },
                {
                    stepImg: StepImg15,
                    desc: '檢測濃度及萃取率'
                },
                {
                    stepImg: StepImg16,
                    desc: '封杯，裝瓶'
                },
                {
                    stepImg: StepImg17,
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
                                return <ProcessFlowItem key={index} stepImg={el.stepImg} desc={el.desc}></ProcessFlowItem>
                            })
                        }
                    </GridWrap>
                </SectionBlockInner>
            </SectionBlock>
        );
    }
}
 
export default ProcessFlow;