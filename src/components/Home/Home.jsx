import { homeInfo } from "data/homeInfo"
import nextId from 'react-id-generator';
import { HomeMainBox, HomeText, HomeTextBox } from "./styles/Home.styled";
import { HomeTable } from "./HomeTable";

export const Home = () => {
    return <HomeMainBox>
        <HomeTable />
        <HomeTextBox>
            {homeInfo.map(info => {
            return <HomeText key={nextId()}>{info}</HomeText> 
        })}
        </HomeTextBox>
    </HomeMainBox>
}