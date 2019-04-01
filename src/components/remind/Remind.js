import React, { Component } from 'react'
import RemindItem from './RemindItem'
import styled from 'styled-components'
import Title from '../Title'
import { SectionBlock, SectionBlockInner, ReturnUl } from '../SectionBlock'

class Remind extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rule: [
                '如欲訂購，請於臉書粉絲專頁(搜尋冰帝咖啡)留下您的訂購資訊；亦可於@Line 線上下訂(@C.M BINGDI)，或來電洽詢，專線02-55994585#100、#101。',
                '若未開封，經典冰滴可冷藏7天，其他特調飲品可冷藏3天(瓶身都有標註最佳賞味期限)，特調飲品開封後，建議2小時內飲畢。',
                '本產品為圓柱瓶裝 300ml(空瓶 350ml)，附加密封保護蓋，內容物誤差+10ml 以內。',
                '為維護交易品質，任何產品之任何交易，若有兩次（含）以上未收貨紀錄，將列入不往來名單，請多多包涵。',
                '因個人味譜開發程度相異，故風味介紹僅供參考，仍以實體商品為主。',
                '醫療相關專家建議，每日咖啡攝取量以不超過400mg尤佳，飲用時請注意身體狀況，以上資料參考JAMA Internal Medicine美國醫學會內科學期刊。',
                '若對於產品有任何問題，歡迎撥打客服專線：02-5599-4585#100、#101。若無人接聽可於 Line@ 線上客服洽詢，或由粉絲專頁私訊，冰帝將於收到訊息後盡速回覆。'
            ]
        }
    }
    render() { 
        return (
            <SectionBlock id={this.props.idName} data-block>
                <Title title='注意事項' desc='remind'></Title>
                <SectionBlockInner>
                    <ReturnUl>
                        {this.state.rule.map( (el, index) => {
                            return <RemindItem key={index} rule={el}></RemindItem>
                        })}
                    </ReturnUl>
                </SectionBlockInner>
            </SectionBlock>
        )
    }
}
 
export default Remind;