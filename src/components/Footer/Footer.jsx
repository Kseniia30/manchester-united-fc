import { Box } from 'components/common/Box';
import { FooterBox } from './Footer.styled';

export const Footer = ({ children }) => {
    return (
        <FooterBox>
            <Box>{children}</Box>
        </FooterBox>
    );
};
