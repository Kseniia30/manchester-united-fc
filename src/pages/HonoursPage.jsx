import { Honours } from "components/Honours/Honours"
import { HonoursTable } from "components/Honours/HonoursTable"

const { Box } = require("components/common/Box")
const { Title } = require("components/common/common.styled")

const HonoursPage = () => {
    return <Box>
        <Title>Honours
            <br/>
            <span style={{fontSize: "20px"}}>As of 31 January 2023</span>
        </Title>
        <Honours/>
        <HonoursTable/>
    </Box>
}

export default HonoursPage