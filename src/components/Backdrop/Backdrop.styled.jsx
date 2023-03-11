import styled from "styled-components"
import { motion } from "framer-motion"
import MUlogo from "images/MUlogo.jpg"

export const StyledBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    transform: scale(1);
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 99;
`
export const StyledModal = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 70px 10px;
    background-color: #FFF;
    overflow-y: scroll;
    background-image: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${MUlogo});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
`

export const CloseBtn = styled.button`
    border: 1px solid black;
    border-radius: 50%;
    DISPLAY: flex;
    padding: 5px;
    position: absolute;
    right: 70px;
    top: 20px;
    color: #000;

    @media screen and (min-width: 768px) {
        right: 40px;
        top: 40px;
    }
`

export const ImageModalBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
    overflow: hidden;
`

export const ImageModal = styled.img`
    border-radius: 0 20px;
    width: 500px;

    @media screen and (min-width: 1200px) {
        width: 700px;
    }
`

export const ImageModalText = styled.p`
    color: #FFF;
    text-align: justify;
    margin-top: 10px;
`