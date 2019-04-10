import React, { Component } from 'react';
import StoryImg1 from '../../images/story-img-1@3x.jpg'
import StoryImg2 from '../../images/story-img-2@3x.jpg'
import StoryImg3 from '../../images/story-img-3@3x.jpg'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import { forceCheck } from 'react-lazyload';
import FadeIn from "react-lazyload-fadein";

const GridWarp = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 0;
  grid-template-areas: "top rightTop""top rightBottom";
  margin-bottom: 56px;
  line-height: 0;
  div {
    &:nth-child(1) {
      grid-area: top;
    }
    &:nth-child(2) {
      grid-area: rightTop;
    }
    &:nth-child(3) {
      grid-area: rightBottom;
    }
    img {
      max-width: 100%;
      object-fit: scale-down;
      display: block;
      margin: 0;
    }
  }
`


class StoryImagesWall extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentDidMount = () => {
    forceCheck();
  }
  render() { 
    return (
      <GridWarp>
        <div>
          <FadeIn duration={300} easing={'ease-out'}>
            {/* <img src={StoryImg1} alt=""/> */}
            {onload => (
                <img
                    src={StoryImg1}
                    onLoad={onload}
                />
            )}
          </FadeIn>
        </div>
        <div>
          <FadeIn duration={300} easing={'ease-out'}>
            {onload => (
                <img
                    src={StoryImg2}
                    onLoad={onload}
                />
            )}
          </FadeIn>
        </div>
        <div>
          <FadeIn duration={300} easing={'ease-out'}>
            {onload => (
                <img
                    src={StoryImg3}
                    onLoad={onload}
                />
            )}
          </FadeIn>
        </div>
        {/* <img src={StoryImg1} alt=""/>
        <img src={StoryImg2} alt=""/>
        <img src={StoryImg3} alt=""/> */}
      </GridWarp>
    );
  }
}
 
export default StoryImagesWall;