import styled from "styled-components"
import { IoFootballOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

export const LayoutBox = styled(motion.div)``

export const MainLink = styled(Link)``
export const MainLogo = styled.img`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 1200px) {
        width: 60px;
        height: 60px;
    }
`
export const StyledBurger = styled(IoFootballOutline)`
    width: 50px;
    height: 50px;
    color: yellow;
    margin-left: auto;
`