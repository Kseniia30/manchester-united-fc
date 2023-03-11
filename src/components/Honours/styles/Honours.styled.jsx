import styled from "styled-components"

export const HonoursText = styled.p`
    text-align: justify;
    text-indent: 40px;
    margin-bottom: 10px;
`
export const FirstBox = styled.div`
    @media screen and (min-width: 768px) {
        display: flex;
    }
`
export const ImageBox = styled.div`
    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
        margin-bottom: 10px;
        margin-left: 20px;
    }
`
export const HonoursImg = styled.img`
    width: 280px;
    border-radius: 0 20px;

    @media screen and (min-width: 768px) {
        width: 360px;
    }
`
export const HonoursImgDescr = styled.p`
    font-size: 12px;
    text-align: center;

    @media screen and (min-width: 768px) {
        font-size: 16px;
    }
`