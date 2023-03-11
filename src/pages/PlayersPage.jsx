import { Box } from "components/common/Box"
import { Title } from "components/common/common.styled"
import { PlayersList } from "components/Players/PlayersList"

const PlayersPage = () => {
    return <Box> 
        <Title>First-team squad
            <br/>
            <span style={{fontSize: "20px"}}>As of 31 January 2023</span>
        </Title>
        <PlayersList/>
    </Box>
}

export default PlayersPage