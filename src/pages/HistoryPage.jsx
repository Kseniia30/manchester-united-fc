import { Box } from "components/common/Box"
import { Title } from "components/common/common.styled"
import { History } from "components/History/History"
import { HistoryMenu } from "components/History/HistoryMenu"

const HistoryPage = () => {

    return <Box> 
        <Title> History of Manchester United F.C.</Title>
        <HistoryMenu />
        <History />
    </Box>
}

export default HistoryPage