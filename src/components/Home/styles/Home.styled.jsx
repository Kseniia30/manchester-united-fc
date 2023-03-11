import styled from "styled-components"

export const HomeMainBox = styled.div`
    @media screen and (min-width: 768px) {
        display: flex;
    }

    @media screen and (min-width: 1200px) {
        flex-direction: row-reverse;
    }

`

export const HomeTextBox = styled.div`
    @media screen and (min-width: 768px) {
        margin-left: 14px;
    }

    @media screen and (min-width: 1200px) {
        width: 600px;
        margin-left: 10px;
        margin-right: 30px;
    }
`

export const HomeText = styled.p`
    text-align: justify;
    text-indent: 40px;

    @media screen and (min-width: 1200px) {
        margin-bottom: 10px;
    }
`