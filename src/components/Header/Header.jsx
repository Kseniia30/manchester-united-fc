import { Box } from "components/common/Box"
import { HeaderBox, HeaderDiv } from "./Header.styled";

export const Header = ({ children }) => {
    return (
        <HeaderBox>
            <Box>
                <HeaderDiv>
                    {children}
                </HeaderDiv>
            </Box>
        </HeaderBox>
    );
};