import styled from "styled-components"

const ColoursBox = styled.div`
    @media screen and (min-width: 768px) {
        display: flex;
    }
`
const ColoursTextBox = styled.div`
    @media screen and (min-width: 1200px) {
    }
`
const ColoursText = styled.p`
    text-align: justify;
    text-indent: 40px;

    @media screen and (min-width: 768px) {
        :not(:last-child) {
            margin-bottom: 15px;
        }
    }

    @media screen and (min-width: 1200px) {
        :not(:last-child) {
            margin-bottom: 25px;
        }
        width: 700px;
    }
`
const CrestsList = styled.ul`
    margin-top: 20px;
    text-align: center;

    @media screen and (min-width: 768px) {
        margin-top: 0;
        margin-left: 15px;
    }

    @media screen and (min-width: 1200px) {
        display: flex;
        flex-wrap: wrap;
        margin-top: -10px;
        margin-right: -10px;
    }
`
const CrestsItem = styled.li`
    :not(:last-child) {
        margin-bottom: 15px;
    }

    @media screen and (min-width: 1200px) {
        width: calc(100% /2 - 10px);
        margin-top: 10px;
        margin-right: 10px;
        
        :not(:last-child) {
        margin-bottom: 0;
    }
    }
`
const CrestsImg = styled.img`
    width: 280px;
    height: max-content;
    margin-bottom: 10px;

    @media screen and (min-width: 768px) {
        width: 150px;
    }

    @media screen and (min-width: 1200px) {
        width: 170px;
    }
`
const CrestsDescr = styled.p``

export {ColoursBox, ColoursTextBox, ColoursText, CrestsList, CrestsItem, CrestsImg, CrestsDescr}