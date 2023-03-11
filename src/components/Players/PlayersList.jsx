import { firstTeam } from "data/players"
import { Link } from "react-router-dom"
import {Players, PlayerItem, PlayerImg, PlayerInfo, PlayerNum, PlayerName} from "./PlayersList.styled"

export const PlayersList = () => {
    return <Players>
        {firstTeam.map(player => {
            const { no, name, photo } = player
            return <PlayerItem key={no}>
                <Link to={`/players/${no}`}>
                    <PlayerImg src={photo} alt={name} />
                    <PlayerInfo>
                        <PlayerNum>No.: {no}</PlayerNum>
                        <PlayerName><b>{name}</b></PlayerName>
                    </PlayerInfo>
                </Link>
            </PlayerItem>
        })}
    </Players>
}