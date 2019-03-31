import React, { Component } from 'react'
import styled from 'styled-components'
import SectionBorderImg from '../images/section-border@4x.png'

const SectionBlock = styled.section`
    padding: 88px 0 108px 0;
    position: relative;
    &::after {
        content: "";
        width: 100%;
        background: transparent url(../${SectionBorderImg}) no-repeat center top;
        position: absolute;
        background-size: auto 100%;
        left: 0;
        bottom: 0;
        height: 20px;
    }
    @media (max-width: 980px) {
        padding: 56px 0 80px 0;
    }
    &:last-child {
        &::after {
            display: none;
        }
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