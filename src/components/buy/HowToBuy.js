import React, { Component } from 'react'
import styled from 'styled-components'
import HowToBuyItem from './HowToBuyItem'
import Title from '../Title'
import { SectionBlock, SectionBlockInnerFlex } from '../SectionBlock'

class HowToBuy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buyTypes: [
        {
          icon: 'icon-retail',
          name: '零售',
          remind: [
            '5瓶以下。',
            'YOWOO及honestbee運送，運費自付。'
          ],
          type: [
            '數量',
            '地點'
          ]
        },{
          icon: 'icon-preorder',
          name: '預購',
          remind: [
            '最少6瓶/盒。',
            '7日前預購免運費，享原價9折(商品特價期間再享折扣)，7日以內預購，免運費。收到匯款後1日內與您聯繫，隔日出貨(例假日順延)。'
          ],
          type: [
            '數量',
            '折扣'
          ]
        },{
          icon: 'icon-cash',
          name: '自取付現',
          remind: [
            '不限。',
            '臺北捷運中和新蘆線「徐匯中學」站，週一至週五AM 07:00~PM 08:00，此付款方式一律免運費。'
          ],
          type: [
            '數量',
            '地點'
          ]
        },{
          icon: 'icon-event',
          name: '展演活動',
          remind: [
            '不限。',
            '響應環保，可提供公司、企業及機關單位方形保溫桶15L(空桶18L，4小時保溫5°C以下，附加冰塊)展演活動飲用，請提前3日前預購，限定預購2桶，於臺北捷運「徐匯中學」站2號出口自取並送回空桶，可享原價8折(商品特價期間再享折扣)。'
          ],
          type: [
            '數量',
            '優惠'
          ]
        }
      ]
    }
  }
  render() { 
    return (
      <SectionBlock id={this.props.idName} data-block>
        <Title title="訂購方式" desc="how to buy"></Title>
        <SectionBlockInnerFlex>
          {
            this.state.buyTypes.map((el,index)=>{
              return <HowToBuyItem key={index} iconName={el.icon} name={el.name} remind={el.remind} type={el.type}></HowToBuyItem>
            })
          }
        </SectionBlockInnerFlex>
      </SectionBlock>
    );
  }
}
 
export default HowToBuy;