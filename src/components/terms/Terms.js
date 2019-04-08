import React, { Component } from 'react'
import TermsItem from './TermsItem'
import styled from 'styled-components'
import Title from '../Title'
import { SectionBlock, SectionBlockInner, ReturnUl } from '../SectionBlock'

const TermsText = styled.p`
  font-size: 14px;
  line-height: 1.8;
  color: #d4c7bf;
  text-align: left;
  letter-spacing: 1px;
  position: relative;
  margin-bottom: 24px;
`

class Terms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rule: [
                '隱私權保護政策的適用範圍<br>隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。',
                '資料的蒐集與使用方式<br>為了在本網站上提供您最佳的互動性服務，可能會請您提供相關個人的資料，其範圍如下：<br>本網站在您使用服務信箱、聯絡我們等互動性功能時，會保留您所提供資料： 如姓名、性別、年齡、出生日期、電話、通信地址、住址、電子郵件地址、等情況。<br>除非取得您的同意或其他法令之特別規定，本網站絕不會將您的個人資料揭露予第三人或使用於蒐集目的以外之其他用途。但本網站將根據執法單位之要求或為公共安全之目的提供個人資料。在此情況下之任何披露，本網站均不承擔任何責任。',
                '隱私權保護政策之修正<br>本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。',
            ]
        }
    }
    render() { 
        return (
            <SectionBlock id={this.props.idName} data-block>
                <Title title='使用條款' desc='terms'></Title>
                <SectionBlockInner>
                    <TermsText>歡迎您光臨「冰帝咖啡網站」(以下簡稱本網站)，為了讓您能夠安心的使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：</TermsText>
                    <ReturnUl>
                        {this.state.rule.map( (el, index) => {
                            return <TermsItem key={index} rule={el}></TermsItem>
                        })}
                    </ReturnUl>
                </SectionBlockInner>
            </SectionBlock>
        )
    }
}
 
export default Terms;