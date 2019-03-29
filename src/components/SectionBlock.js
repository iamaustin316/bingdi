import React, { Component } from 'react'
import styled from 'styled-components'

const SectionBlock = styled.section`
    padding: 80px 0;
    @media (max-width: 980px) {
        padding: 48px 0;
    }
`
const SectionBlockInner = styled.div`
    width: 1280px;
    margin: 0 auto;
    @media (max-width: 1279px) {
        width: 960px;
        padding: 0 16px;
        flex-wrap: wrap;
    }
    @media (max-width: 959px) {
        width: auto;
        padding: 0 16px;
        flex-wrap: wrap;
    }
`

const SectionBlockInnerFlex = styled.div`
    width: 1280px;
    margin: 0 auto;
    display: flex;
    @media (max-width: 1279px) {
        width: 960px;
        padding: 0 16px;
        flex-wrap: wrap;
    }
    @media (max-width: 959px) {
        width: auto;
        padding: 0 16px;
        flex-wrap: wrap;
    }
`

const ReturnUl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    counter-reset: list;
`
export { SectionBlock, SectionBlockInner, SectionBlockInnerFlex, ReturnUl }