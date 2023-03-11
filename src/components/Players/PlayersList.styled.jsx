import styled from "styled-components"

const Players = styled.ul`
    text-align: center;

    @media screen and (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        margin-top: -20px;
        margin-right: -20px;
    }
`
const PlayerItem = styled.li`
    :not(:last-child) {
        margin-bottom: 15px;
    }

    @media screen and (min-width: 768px) {
        width: calc(100% / 2 - 20px);
        margin-top: 20px;
        margin-right: 20px;

        :not(:last-child) {
            margin-bottom: 0;
        }
    }

    @media screen and (min-width: 1200px) {
        width: calc(100% / 3 - 20px);
    }
`
const PlayerImg = styled.img`
    width: 280px;
    height: max-content;
    border-radius: 0 20px;
`
const PlayerInfo = styled.div`
    display: flex;
    margin-top: 10px;
    justify-content: center;
`
const PlayerNum = styled.p`
    margin-right: 5px;
`
const PlayerName = styled.p``

export {Players, PlayerItem, PlayerImg, PlayerInfo, PlayerNum, PlayerName}