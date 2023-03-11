import styled from "styled-components"

export const StyledTable = styled.table`
    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
        font-size: 18px;
    }

    @media screen and (min-width: 1200px) {
        width: 540px;
        font-size: 20px;
    }
`

export const MainTableImg = styled.img`
    border-radius: 0px 20px;
    width: 280px;

    @media screen and (min-width: 1200px) {
        width: 450px;
        margin-left:auto;
        margin-rigth: auto;
    }
`

export const StadiumImg = styled.img`
    border-radius: 0px 20px;
    width: 190px;

    @media screen and (min-width: 1200px) {
        width: 300px;
        margin-left:auto;
        margin-rigth: auto;
    }
`

export const StyledTh = styled.th`
    vertical-align: top;
    text-align: left;
    font-family: "Nunito", sans-serif;
`

export const StyledTd = styled.td`
    padding-left: 10px;
    font-family: "Nunito", sans-serif;
`

export const TableLink = styled.a`
    color: burlywood;

    :hover, :focus {
        color: darkred;
    }

    @media screen and (min-width: 768px) {
        color: #b22e05;
    }
`