import styled from "styled-components"

const HistoryMenuList = styled.ul`
    margin-bottom: 15px;
`
const HistoryMenuItem = styled.li`
    :not(:last-child) {
        margin-bottom: 10px;
    }
`
const HistoryMenuLink = styled.a`
    color: #f1600b;
    transition-property: color;
    transition-timing-function: ease-in-out;
    transition-delay: 250ms;

    :hover, :focus {
        color: #933535;
    }
`

export {HistoryMenuItem, HistoryMenuList, HistoryMenuLink}