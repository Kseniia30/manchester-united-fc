import { FirstBox, HonoursImg, HonoursImgDescr, HonoursText, ImageBox } from "./styles/Honours.styled"

export const Honours = () => {
    return <>
        <FirstBox>
            <HonoursText>Manchester United is one of the most successful clubs in Europe in terms of trophies won. The club's first trophy was the Manchester Cup, which they won as Newton Heath LYR in 1886. In 1908, the club won their first league title, and won the FA Cup for the first time the following year. Since then, they have gone on to win a record 20 top-division titles – including a record 13 Premier League titles – and their total of 12 FA Cups is second only to Arsenal. Those titles have meant the club has appeared a record 30 times in the FA Community Shield (formerly the FA Charity Shield), which is played at the start of each season between the winners of the league and FA Cup from the previous season; of those 30 appearances, Manchester United have won a record 21, including four times when the match was drawn and the trophy shared by the two clubs.</HonoursText>
            <ImageBox>
                <HonoursImg src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Manchester_United_Champions_League_Medals.jpg/1920px-Manchester_United_Champions_League_Medals.jpg" alt="trophy" />
                <HonoursImgDescr>Winners' and runners-up medals from Manchester United's UEFA Champions League final appearances in 2008, 2009 and 2011</HonoursImgDescr>
            </ImageBox>
        </FirstBox>
        <HonoursText>
            The club had a successful period under the management of Matt Busby, starting with the FA Cup in 1948 and culminating with becoming the first English club to win the European Cup in 1968, winning five league titles in the intervening years. The club's most successful decade, however, came in the 1990s under Alex Ferguson; five league titles, four FA Cups, one League Cup, five Charity Shields (one shared), one UEFA Champions League, one UEFA Cup Winners' Cup, one UEFA Super Cup and one Intercontinental Cup. The club has won the Double (winning the Premier League and FA Cup in the same season) three times; the second in 1995–96 saw them become the first club to do so twice, and it became referred to as the "Double Double". United became the sole British club to win the Intercontinental Cup in 1999 and are one of only three British clubs to have won the FIFA Club World Cup, in 2008. In 1999, United became the first English club to win the Treble. In 2017, United won the 2016–17 UEFA Europa League, beating Ajax in the final. In winning that title, United became the fifth club to have won the "European Treble" of European Cup/UEFA Champions League, Cup Winners' Cup, and UEFA Cup/Europa League after Juventus, Ajax, Bayern Munich and Chelsea.
        </HonoursText>
        <HonoursText>The club's most recent trophy came in February 2023, with the 2022–23 EFL Cup.</HonoursText>
    </>
}