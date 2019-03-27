import React, { Component } from 'react'
import styled from 'styled-components'
import Title from '../Title'
import StoryIamgeWall from './StoryImageWall'
import StoryItem from './StoryItem'

const StoryWrap = styled.div`
    padding: 80px 0;
`

const StoryInner = styled.div`
    width: 960px;
    margin: 0 auto;
    @media (max-width: 980px) {
        width: auto;
        padding: 0 16px;
    }
`

class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: [
        {
          title: '關於冰滴咖啡',
          desc: '「1600年代荷蘭船員們從當時的殖民地印尼載運咖啡回歐洲途中，因為船中沒有熱水，無法飲用熱咖啡，於是便想出了冰滴咖啡。用冷水萃取的咖啡，味道柔和順口，香氣撲鼻，不只是船員們，連一般人也很喜愛。」以上是市面上時常聽到的冰滴咖啡起源故事，其實是日本咖啡業者們為了推廣冰滴壺虛構出來的，屬於市場行銷手段之一。事實上包括荷蘭在內的西方國家裡，主要並不是使用日本的點滴式（冰水一滴一滴落下來的萃取法），而是以所謂「冷泡法（Cold-Brew）」的浸泡式（將咖啡粉長時間浸泡在冷水中）冷萃而來。而且，西方也沒有所謂的冰滴咖啡（Dutch Coffee），而是後來的咖啡業者聽了日本式冰滴咖啡起源故事之後，運用在市場行銷上。在日本，冰滴咖啡已有幾百年的歷史，所以冰滴咖啡也被稱為「Kyoto coffee」（京都咖啡）、「Japanese-style slow-drip」（日式慢滴）。冰滴咖啡製成是利用5度C以下的冰水混合物，讓冰塊自然融化後通過閥門控制冰水滴入咖啡粉的速度，冰水滴在咖啡粉中慢慢溶出咖啡的風味，一點一點滴漏出萃取液，完整萃取的時長約7～9小時。為了獲得更好的口味，而後還需12～48小時的冷藏發酵時間。每次萃取的量很少（通常為30～60毫升），一般不加冰塊時濃度極高，如果咖啡液太濃則視個人口味再加冰塊稀釋。因為過程緩慢，冰滴咖啡的價格較為昂貴，但口感極佳。美國的咖啡師冠軍Laila在接受專訪的時候曾經說過，比起冷萃咖啡，冰滴咖啡具有更多芳香，且味道更細膩而微妙。'
        },
        {
          title: '品牌介紹',
          desc: '話說從前有個冰之國的國王，他掌握水的元素，冬天他凝水成冰，初春提供豆民們一整年豐沛的水量，敬愛他的豆民們稱他為冰帝，為了犒賞辛勤工作的豆民們，冰帝於是揮舞著他的魔法權杖，產生接近零度的水滴，與咖啡結合後，變成了絕妙的美味飲品！'
        },
        {
          title: '冰帝咖啡信念',
          desc: '「冰帝咖啡」的信念是讓原來高不可攀的冰滴咖啡，成為人人隨時隨地都能品嚐的幸褔滋味；我們用誠摯、細緻的態度一點一滴做好飲品。品牌LOGO在設計時，也是依照相同的理念去執行的。'
        }
      ]
    }
  }
  render() { 
    return (
      <StoryWrap>
        <Title title='品牌故事' desc='story'></Title>
        <StoryIamgeWall></StoryIamgeWall>
        <StoryInner>
          {this.state.story.map((el, index) => {
            return <StoryItem key={index} title={el.title} desc={el.desc}></StoryItem>
          })}
        </StoryInner>
      </StoryWrap>
    );
  }
}

export default Story;