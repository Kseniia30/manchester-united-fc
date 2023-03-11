import styled from "styled-components";
import { motion } from "framer-motion"

export const Container = styled(motion.div)`
    width: 280px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;

    @media screen and (min-width: 768px) {
        width: 748px;
        padding-left: 15px;
        padding-right: 15px;
    }
    @media screen and (min-width: 1200px) {
        width: 1180px;
        padding-left: 30px;
        padding-right: 30px;
    }
`