import { NavLink } from "react-router-dom"
import styled from "styled-components"

const MainMenuList = styled.ul`
    text-align: center;

    @media screen and (min-width: 768px) {
        display: flex;
    }
`
const MainMenuItem = styled.li`
    :not(:last-child) {
        margin-bottom: 15px;
    }

    @media screen and (min-width: 768px) {
        :not(:last-child) {
            margin-bottom: 0;
            margin-right: 10px;
        }
    }
`
const StyledNavLink = styled(NavLink)`
    color: black;
    font-size: 30px;
    font-weight: 600;

    &.active {
        color: red;
    }
    :hover:not(.active),
    :focus:not(.active) {
        #f44336;
    }

    @media screen and (min-width: 768px) {
        color: burlywood;
        font-size: 24px;
    }
`

export {MainMenuList, MainMenuItem, StyledNavLink}