import { historyMenu } from "data/history"
import nextId from "react-id-generator"
import {HistoryMenuItem, HistoryMenuList, HistoryMenuLink} from "./styles/HistoryMenu.styled"

export const HistoryMenu = () => {
    return <HistoryMenuList>
        {historyMenu.map(item => {
            const { id, title } = item
            return <HistoryMenuItem key={nextId()}>
                <HistoryMenuLink href={`#${id}`}>{title}</HistoryMenuLink>
            </HistoryMenuItem>
        })}
    </HistoryMenuList>
}