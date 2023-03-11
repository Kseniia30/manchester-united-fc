import styled from "styled-components"

const HistoryList = styled.ul``
const HistoryItem = styled.li`
    :not(:last-child) {
        margin-bottom: 10px;
    }
`
const HistoryTitle = styled.h2`
    margin-bottom: 10px;
`
const HistoryText = styled.p`
    text-align: justify;
    text-indent: 40px;
    margin-bottom: 10px;
`
const HistoryImgList = styled.ul`
    text-align: center;

    @media screen and (min-width: 768px) {
        display: flex;
    }
`
const HistoryImgItem = styled.li`
    :not(:last-child) {
        margin-bottom: 10px;
    }

    @media screen and (min-width: 768px) {
        display: inline-grid;
        align-items: center;

        :not(:last-child) {
            margin-right: 10px;
        }
    }

    @media screen and (min-width: 1200px) {
        :not(:last-child) {
            margin-right: 5px;
        }
    }
`
const HistoryImg = styled.img`
    width: 280px;
    height: max-content;
    margin-bottom: 5px;
    border-radius: 0px 20px;

    @media screen and (min-width: 768px) {
        width: 240px;
    }

    @media screen and (min-width: 1200px) {
        width: 390px;
    }
`
const HistoryImgText = styled.p`
    color: #000;
`

export {HistoryList, HistoryItem, HistoryTitle,HistoryText, HistoryImgList, HistoryImgItem, HistoryImg, HistoryImgText}