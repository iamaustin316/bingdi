import React, { Component } from 'react';
import styled from 'styled-components';
import QAItem from './QAItem';
import Title from '../Title'
import { SectionBlock, SectionBlockInner } from '../SectionBlock'

class QA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qaItems: [
                {
                    question: '為何要預購？',
                    answer: '咖啡豆就像人一樣擁有生命，會因吸入氧氣造成細胞氧化逐漸老化，剛烘焙完的咖啡豆會大量釋放出香氣因子及二氧化碳並未到達最成熟的階段，冰帝咖啡用心掌握每一步驟，嚴格計算豆子放、排氣的時間，才開始滴漏、封存韻釀，目的就是讓咖啡的美味完美呈現在顧客的味蕾，所以預購的顧客除了享折扣外，更可以讓我們配合您的時間呈遞完美的風味。'
                },{
                    question: '預購為何是六瓶以上？',
                    answer: '六瓶以下開壺滴製時，咖啡粉量過少，萃取過程中較難操作及調整風味；為顧及運送品質、冰滴咖啡之風味，六瓶已是最低極限。'
                },{
                    question: '原味(經典冰滴)及特調冰滴咖啡可以放幾天？',
                    answer: '若未開封，經典冰滴可冷藏7天，其他特調飲品可冷藏3天(瓶身都有標註最佳賞味期限)，特調飲品開封後，建議2小時內飲畢。'
                },{
                    question: '冰滴咖啡的咖啡因為何較低？',
                    answer: '咖啡因在極低溫的環境不易萃取，一般咖啡的咖啡因萃取率為所使用之咖啡豆的80%以上，而冰滴式的咖啡因萃取率則低於20%；為使每個人能健康享用幸福的滋味，冰帝咖啡在滴製時採全程人工，隨時將水溫控制於攝氏五度以內，以「低溫」及「慢滴」的方式透過冰水滲透來萃取咖啡，降低咖啡因含量，醫學研究指出，過量咖啡因會影響人體心臟、腎臟、消化系統、呼吸系統、生殖系統及眼睛。'
                },{
                    question: '冰滴咖啡能熱飲嗎？',
                    answer: '可以，可隔水加熱飲用。'
                },{
                    question: '如果還有其他問題怎麼辦？',
                    answer: '冰帝咖啡非常歡迎您來電或於粉絲專頁私訊我們，我們非常樂意為您服務。'
                }
            ]
        }
    }
    render() { 
        return (
            <SectionBlock id={this.props.idName} data-block>
                <Title title="問與答" desc="q&amp;a"></Title>
                <SectionBlockInner>
                    {
                        this.state.qaItems.map((el,index)=>{
                            return <QAItem key={index} question={el.question} answer={el.answer}></QAItem>
                        })
                    }
                </SectionBlockInner>
            </SectionBlock>
        );
    }
}
 
export default QA;