import { BsBoxArrowUpRight } from "react-icons/bs";
import { MainTableImg, StadiumImg, StyledTable, StyledTd, StyledTh, TableLink } from "./styles/HomeTable.styled";

export const HomeTable = () => {
    return <StyledTable>
        <tbody>
            <tr>
                <td colSpan="2">
                    <MainTableImg src="https://frontofficesports.com/wp-content/uploads/2022/03/FOS-22-3.2-Manchester-United.jpg" alt="Manchester United Football Club"/>
                </td>
            </tr>
            <tr>
                <StyledTh>Full name</StyledTh>
                <StyledTd>Manchester United Football Club</StyledTd>
            </tr>
            <tr>
                <StyledTh rowSpan="2">Nickname(s)</StyledTh>
                <StyledTd>The Red Devils</StyledTd>
            </tr>
            <tr>
                <StyledTd>United</StyledTd>
            </tr>
            <tr>
                <StyledTh rowSpan="3">Short name</StyledTh>
                <StyledTd>Man United</StyledTd>
            </tr>
            <tr>
                <StyledTd>Man Utd</StyledTd>
            </tr>
            <tr>
                <StyledTd>Man U</StyledTd>
            </tr>
            <tr>
                <StyledTh rowSpan="2">Founded</StyledTh>
                <StyledTd>1878 as Newton Heath LYR F.C.</StyledTd>
            </tr>
            <tr>
                <StyledTd>24 April 1902 as Manchester United F.C.</StyledTd>
            </tr>
            <tr>
                <StyledTh rowSpan="2">Stadium</StyledTh>
                <StyledTd>Old Trafford</StyledTd>
            </tr>
            <tr>
                <StyledTd>
                    <StadiumImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Manchester_United_Panorama_%288051523746%29.jpg/1024px-Manchester_United_Panorama_%288051523746%29.jpg" alt="Old Trafford"/>
                </StyledTd>
            </tr>
            <tr>
                <StyledTh>Owner</StyledTh>
                <StyledTd>Manchester United plc</StyledTd>
            </tr>
            <tr>
                <StyledTh>League</StyledTh>
                <StyledTd>Premier League</StyledTd>
            </tr>
            <tr>
                <StyledTh>Website</StyledTh>
                <StyledTd>
                    <TableLink href="https://www.manutd.com/en" target="_blanc" rel="noreferrer">Club website <BsBoxArrowUpRight /></TableLink>
                </StyledTd>
            </tr>
        </tbody>
    </StyledTable>
}