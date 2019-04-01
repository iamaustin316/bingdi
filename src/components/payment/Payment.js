import React, { Component } from 'react'
import styled from 'styled-components'
import PaymentItem from './PaymentItem'
import Title from '../Title'
import { SectionBlock, SectionBlockInner } from '../SectionBlock'

const PaymentWrap = styled.section`
    padding: 80px 0;
`
const PaymentInner = styled.div`
    width: 960px;
    margin: 0 auto;
    @media (max-width: 980px) {
        width: auto;
        padding: 0 16px;
    }
`
class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            payments: [
                {
                    title: '自取付現',
                    desc: ''
                },
                {
                    title: '貨到付款',
                    desc: ''
                },
                {
                    title: 'ATM&網路轉帳',
                    desc: '銀行代碼808，帳號 0772-940-252903。匯款後請告知帳號後5碼，<br>並告知我們收件人的大名、地址、訂購品項及電話，款項查核無誤後1日內將與您聯繫，次日出貨(例假日順延)。'
                },
                {
                    title: '線上刷卡',
                    desc: '限UberEATS線上訂餐服務'
                }
            ]
        }
    }
    render() { 
        return (
            <SectionBlock id={this.props.idName} data-block>
                <Title title="付款方式" desc="payment"></Title>
                <SectionBlockInner>
                    {
                        this.state.payments.map((el,index)=>{
                            return <PaymentItem key={index} title={el.title} desc={el.desc}></PaymentItem>
                        })
                    }
                </SectionBlockInner>
            </SectionBlock>
        );
    }
}
 
export default Payment;