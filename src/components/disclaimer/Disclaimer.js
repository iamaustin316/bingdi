import React, { Component } from 'react'
import DisclaimerItem from './DisclaimerItem'
import styled from 'styled-components'
import Title from '../Title'
import { SectionBlock, SectionBlockInner, ReturnUl } from '../SectionBlock'

const DisclaimerText = styled.p`
  font-size: 14px;
  line-height: 1.8;
  color: #d4c7bf;
  text-align: left;
  letter-spacing: 1px;
  position: relative;
  margin-bottom: 24px;
`

class Disclaimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rule: [
                '本網站承諾力求網站內容之準確性及完整性，但內容如有錯誤或遺漏，本網站不會承擔任何賠償責任，所有本網站內容，將會隨時更改，而不作另行通知。',
                '本網站可隨時停止或變更   網頁資料及有關條款而毋須事前通知用戶。',
                '本網站不會對使用或連結本網頁而引致任何損害(包括但不限於電腦病毒、系統固障、資料損失)、誹謗、侵犯版權或知識產權所造成的損失，包括但不限於利潤、商譽、使用、資料損失或其他無形損失，本網站不承擔任何直接、間接、附帶、特別、衍生性或懲罰性賠償。',
                '本公司可能會連接至其他機構所提供的網頁，本公司不會對這些網頁內容作出任何保證或承擔任何責任。使用者如瀏覽這些網頁，將要自己承擔後果。是否使用本網站之服務下載或取得任何資料應由用戶自行考慮且自負風險，因前開任何資料之下載而導致用戶電腦系統之任何損壞或資料流失，本網站不承擔任何責任。'
            ]
        }
    }
    render() { 
        return (
            <SectionBlock id={this.props.idName} data-block>
                <Title title='免責聲明' desc='disclaimer'></Title>
                <SectionBlockInner>
                    <DisclaimerText>歡迎您光臨「冰帝咖啡網站」(以下簡稱本網站)，任何瀏覽網站的人士，須自行承擔一切風險，本網站不會負責任何因瀏覽或使用本網站而引致之損失。本網站不會作出任何默示的擔保。</DisclaimerText>
                    <ReturnUl>
                        {this.state.rule.map( (el, index) => {
                            return <DisclaimerItem key={index} rule={el}></DisclaimerItem>
                        })}
                    </ReturnUl>
                </SectionBlockInner>
            </SectionBlock>
        )
    }
}
export default Disclaimer;