import {MainMenuList, MainMenuItem, StyledNavLink} from "./MainMenu.styled"

export const MainManu = () => {
    return <MainMenuList>
            <MainMenuItem><StyledNavLink to="/">Home</StyledNavLink></MainMenuItem>
            <MainMenuItem><StyledNavLink to="/history">History</StyledNavLink></MainMenuItem>
            <MainMenuItem><StyledNavLink to="/crests">Crests and colours</StyledNavLink></MainMenuItem>
            <MainMenuItem><StyledNavLink to="/players">Players</StyledNavLink></MainMenuItem>
            <MainMenuItem><StyledNavLink to="/honours">Honours</StyledNavLink></MainMenuItem>
        </MainMenuList>
}