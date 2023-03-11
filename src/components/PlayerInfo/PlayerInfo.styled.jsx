import styled from "styled-components"
import { BsInstagram } from 'react-icons/bs'

const InfoBox = styled.div`
    @media screen and (min-width: 768px) {
        display: flex;
    }
`

const PlayerImage = styled.img`
    width: 280px;
    border-radius: 0 20px;
    margin-bottom: 10px;

    @media screen and (min-width: 1200px) {
        width: 400px;
    }
`
const PlayerSpan = styled.span`
    font-family: "Nunito", sans-serif;
    font-weight: 600;
`
const PlayerLink = styled.a`
    display: flex;
    align-items: center;
    text-indent: 40px;
    margin-bottom: 10px;

    @media screen and (min-width: 768px) {
        font-size: 18px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 24px;
    }
`
const InstagmemIcon = styled(BsInstagram)`
    margin-left: 5px;
    color: red;

    :hover, :focus {
        color: yellow;
    }

    @media screen and (min-width: 768px) {
        color: darkred;
    }
`
const PlayerTextBox = styled.div`
    @media screen and (min-width: 768px) {
        margin-left: 20px;
    }
`
const PlayerText = styled.p`
    text-align: justify;
    text-indent: 40px;

    :not(:last-child) {
        margin-bottom: 10px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 24px;
    }
`
const BackBtn = styled.button`
    border: 2px solid #ffc107;
    padding: 7px 15px;
    border-radius: 0 20px;

    @media screen and (min-width: 768px) {
        font-size: 18px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 20px;
    }
`

export {BackBtn, InfoBox, PlayerImage, PlayerSpan, PlayerLink, PlayerTextBox, PlayerText, InstagmemIcon}