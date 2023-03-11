import {HonoursTd, HonoursTh, HonoursTr, HonTable, TableFirstImage, TableSecondImage} from "./styles/HonoursTable.styled"

export const HonoursTable = () => {
    return <HonTable>
        <thead>
            <HonoursTr>
                <HonoursTh>Competition</HonoursTh>
                <HonoursTh>Titles</HonoursTh>
                <HonoursTh>Seasons</HonoursTh>
            </HonoursTr>
        </thead>
        <tbody>
            <HonoursTr>
                <td>First Division/Premier League</td>
                <HonoursTd>20</HonoursTd>
                <td>1907–08, 1910–11, 1951–52, 1955–56, 1956–57, 1964–65, 1966–67, 1992–93, 1993–94, 1995–96, 1996–97, 1998–99, 1999–2000, 2000–01, 2002–03, 2006–07, 2007–08, 2008–09, 2010–11, 2012–13</td>
            </HonoursTr>
            <HonoursTr>
                <td>Second Division</td>
                <HonoursTd>2</HonoursTd>
                <td>1935–36, 1974–75</td>
            </HonoursTr>
            <HonoursTr>
                <td>FA Cup</td>
                <HonoursTd>12</HonoursTd>
                <td>1908–09, 1947–48, 1962–63, 1976–77, 1982–83, 1984–85, 1989–90, 1993–94, 1995–96, 1998–99, 2003–04, 2015–16</td>
            </HonoursTr>
            <HonoursTr>
                <td>Football League Cup/EFL Cup</td>
                <HonoursTd>6</HonoursTd>
                <td>1991–92, 2005–06, 2008–09, 2009–10, 2016–17, 2022–23</td>
            </HonoursTr>
            <HonoursTr>
                <td>FA Charity Shield/FA Community Shield</td>
                <HonoursTd>21</HonoursTd>
                <td>1908, 1911, 1952, 1956, 1957, 1965*, 1967*, 1977*, 1983, 1990*, 1993, 1994, 1996, 1997, 2003, 2007, 2008, 2010, 2011, 2013, 2016 </td>
            </HonoursTr>
            <HonoursTr>
                <td>European Cup/UEFA Champions League</td>
                <HonoursTd>3</HonoursTd>
                <td>1967–68, 1998–99, 2007–08</td>
            </HonoursTr>
            <HonoursTr>
                <td>UEFA Europa League</td>
                <HonoursTd>1</HonoursTd>
                <td>2016–17</td>
            </HonoursTr>
            <HonoursTr>
                <td>UEFA Super Cup</td>
                <HonoursTd>1</HonoursTd>
                <td>1991</td>
            </HonoursTr>
            <HonoursTr>
                <td>European Cup Winners' Cup</td>
                <HonoursTd>1</HonoursTd>
                <td>1990–91</td>
            </HonoursTr>
            <HonoursTr>
                <td>FIFA Club World Cup</td>
                <HonoursTd>1</HonoursTd>
                <td>2008</td>
            </HonoursTr>
            <HonoursTr>
                <td>Intercontinental Cup</td>
                <HonoursTd>1</HonoursTd>
                <td>1999</td>
            </HonoursTr>
            <tr>
                <td>
                    <TableFirstImage src="https://i2-prod.mirror.co.uk/incoming/article1885601.ece/ALTERNATES/n310p/0_Manchester-United-v-Swansea-City-Premier-League.jpg" alt="won"/>
                </td>
            </tr>
            <tr>
                <td><TableSecondImage src="https://d3nfwcxd527z59.cloudfront.net/content/uploads/2021/12/10092436/manchester-united-2013-title-winners.jpg" alt="won"/></td>
            </tr>
        </tbody>
    </HonTable>
}