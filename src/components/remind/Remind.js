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
                '特調飲品開封後，建議2小時內飲畢；若未開封，可冷藏冰箱乙週。',
                '本產品為圓柱瓶裝300ml(空瓶350ml)，附加密封保護蓋，內容物誤差+10ml以內。',
                '若您於冰帝咖啡官方臉書粉絲專頁及IG發佈50字以上美味感言，用臉私訊我們，可享6瓶/盒8折優惠(每人限乙次)。',
                '為維護交易品質，任何產品之任何交易，若有兩次（含）以上未收貨紀錄，將列入不往來名單，請多多包涵。',
                '因個人味譜開發程度相異，故風味介紹僅供參考，仍以實體商品為主。',
                '醫療相關專家建議，每日咖啡因攝取量以不超過 300mg 尤佳，飲用時請注意身體狀況。',
                '若對於產品有任何問題，歡迎撥打客服專線：02-55994585#100、#101。若無人接聽可於 Line 線上客服洽詢，或由粉絲專頁私訊，冰帝將於收到訊息後盡速回覆。'
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