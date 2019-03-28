import React, { Component } from 'react'
import ReturnPolicyItem from './ReturnPolicyItem'
import styled from 'styled-components'
import Title from '../Title'

const ReturnPolicyWrap = styled.section`
    padding: 80px 0;
`
const ReturnPolicyInner = styled.div`
    width: 960px;
    margin: 0 auto;
    & > ul {
        list-style: none;
        padding: 0;
        margin: 0;
        counter-reset: list;
    }
    @media (max-width: 980px) {
        width: auto;
        padding: 0 16px;
    }
`

class ReturnPolicy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            policy: [
                {
                    text: '依據「通訊交易解除權合理例外情事適用準則」第2條第一項：「易於腐敗、保存期限較短或解約時即將逾期」之商品，屬於消費者保護法第19條第一項但書所稱合理例外情事。自105年1月1日起，生鮮食品不適用於消費者保護法第19條，並不享有7天鑑賞期。',
                    detail: []
                },{
                    text: '符合下列所述各項情形均可受理退換貨：',
                    detail: ['運送過程當中造成商品毀損。','商品品項數量與訂購單不符合。','商品本身品質不良。']
                },{
                    text: '不能退換貨之情況：',
                    detail: ['無發票。','商品開封、毀損、擦傷刮傷、弄髒、包裝破損不完整等。','個人口感或料理方式的問題。','消費者未按照保存方式造成品質不良。']
                },{
                    text: '退款須知本站收到商品且無誤後，將於7~14個工作天內退貨款給您，款項將退回原訂購人或匯款轉帳人之銀行。',
                    detail: []
                },{
                    text: '顧客服務信箱：chiminbingdi.ltd@gmail.com',
                    detail: []
                }
            ]
        }
    }
    render() { 
        return (
            <ReturnPolicyWrap id={this.props.idName} data-block>
                <Title title='退貨須知' desc='return policy'></Title>
                <ReturnPolicyInner>
                    <ul>
                    {
                        this.state.policy.map((el, index) => {
                            return <ReturnPolicyItem key={index} text={el.text} detail={el.detail}></ReturnPolicyItem>
                        })
                    }
                    </ul>
                </ReturnPolicyInner>
            </ReturnPolicyWrap>
        );
    }
}
 
export default ReturnPolicy;