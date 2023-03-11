import { Title } from "components/common/common.styled";
import { firstTeam } from "data/players";
import nextId from "react-id-generator";
import { Link, useParams } from "react-router-dom"
import { BackBtn, InfoBox, InstagmemIcon, PlayerImage, PlayerLink, PlayerSpan, PlayerText, PlayerTextBox } from "./PlayerInfo.styled";

export const PlayerInfo = () => {
    const playerId = useParams()
    const player = firstTeam.find(player => player.no === playerId.playerId)
    const {no, pos, nation, name, photo, info, inst} = player
    return <>
        <BackBtn type="button">
            <Link to="/players" style={{color: "#ffc107"}}>
                Go back to players list
            </Link>
        </BackBtn>
        <Title>{name}</Title>
        <InfoBox>
            <div>
                <PlayerImage src={photo} alt={name} />
                <PlayerLink href={inst} target="_blank" rel="noreferrer">
                    <PlayerSpan>Instagram: </PlayerSpan>
                    <InstagmemIcon/>
                </PlayerLink>
                <PlayerText><PlayerSpan>No.:</PlayerSpan> {no}</PlayerText>
                <PlayerText><PlayerSpan>Pos.:</PlayerSpan> {pos}</PlayerText>
                <PlayerText><PlayerSpan>Nation:</PlayerSpan> {nation}</PlayerText>
            </div>
            <PlayerTextBox>
                {info.map(item => <PlayerText key={nextId()}>{item}</PlayerText>)}
            </PlayerTextBox>
        </InfoBox>
    </>
}