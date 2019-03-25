import React, { Component } from 'react';
import styled from 'styled-components';
import QAItem from './QAItem';
import Title from '../Title'

const QAwrap = styled.div`
    padding: 80px 0;
`
const QAInner = styled.div`
    width: 960px;
    margin: 0 auto;
    @media (max-width: 980px) {
        width: auto;
        padding: 0 16px;
    }
`

class QA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qaItems: [
                {
                    question: '校分銀著女請就資臺錢為',
                    answer: '有建積，本際過似後們院部來老年光活。查海獎才家師案廣時離我地便小鄉很表很山當全看有笑光一因不修藝的車間在民情，身頭好出野屋裡。生可除？師臺夫件著，山有一是了天縣，信喜你是了這事制臺推時一球半紀所我作自死巴作數天歌小。'
                },
                {
                    question: '下品我政邊',
                    answer: '社文家上到飛，影不不於，件洋的進木覺環票？是聯位品，感覺我製興解相精備兩破神因手術新化一目達便都，故戰邊，身一開一期有消大業分年良的時有下油引趣生因光改，家企指會，家模評興不領為戲一習作為父後康子經色輕人的奇三育是裡中？構對使久更，式兩班作有屋育定解子而時解讀道充子指……古實中況事家樹、那流的量因間會弟，系想不上學一同任充業時金治過不建事團你線？角度隊紙戲演組方，又的。'
                },
                {
                    question: '題一同華是被些土招',
                    answer: '行輪說活，了會而。居議成的下種的五白並路美活我以間又定防……賽西人人統遊畫大有而知像麼水得般大可節精師使。'
                },
                {
                    question: '之裝不預條藥記羅會',
                    answer: '點商質、魚的花的中眼奇引半神寫出就頭如觀有至深，夜們春者樣所；地生晚幾府以發馬了來力。'
                },
                {
                    question: '然在客多地解話來中景麼越優',
                    answer: '較會究離前上於飛一，知年下邊員才子土聽才態盡上配急緊問驚。媽記一中力一它一排布然油球太。'
                },
            ]
        }
    }
    render() { 
        return (
            <QAwrap>
                <Title title="問與答" desc="q&amp;a"></Title>
                <QAInner>
                    {
                        this.state.qaItems.map((el,index)=>{
                            return <QAItem key={index} question={el.question} answer={el.answer}></QAItem>
                        })
                    }
                </QAInner>
            </QAwrap>
        );
    }
}
 
export default QA;