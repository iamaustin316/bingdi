import React, { Component } from 'react'
import styled from 'styled-components'

const SectionBlock = styled.section`
    padding: 80px 0;
`
const SectionBlockInner = styled.div`
    width: 960px;
    margin: 0 auto;
    @media (max-width: 980px) {
        width: auto;
        padding: 0 16px;
        flex-wrap: wrap;
    }
`

const SectionBlockInnerFlex = styled.div`
    width: 960px;
    margin: 0 auto;
    display: flex;
    @media (max-width: 980px) {
        width: auto;
        padding: 0 16px;
        flex-wrap: wrap;
    }
`
 
export { SectionBlock, SectionBlockInner, SectionBlockInnerFlex }