import styled from "styled-components"

export const HonTable = styled.table`
    border-collapse: collapse;
    position: relative;

    @media screen and (min-width: 768px) {
        font-size: 18px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 20px;
    }
`
export const HonoursTd = styled.td`
    text-align: center;
`
export const HonoursTh = styled.th``
export const HonoursTr = styled.tr`
    border: 1px solid black;
`
export const TableFirstImage = styled.img`
    display: none;

    @media screen and (min-width: 768px) {
        display: block;
        border-radius: 0 20px;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 125px;
    }

    @media screen and (min-width: 1200px) {
        width: 115px;
    }
`

export const TableSecondImage = styled.img`
    display: none;

    @media screen and (min-width: 768px) {
        display: block;
        border-radius: 0 20px;
        position: absolute;
        bottom: 0;
        right: 135px;
        height: 145px;
    }

    @media screen and (min-width: 1200px) {
        height: 172px;
        right: 125px;
    }
`