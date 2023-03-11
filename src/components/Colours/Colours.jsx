import { crestAndColours, crests } from "data/crestAndColours"
import nextId from "react-id-generator"
import {ColoursBox, ColoursTextBox, ColoursText, CrestsList, CrestsItem, CrestsImg, CrestsDescr} from "./Colours.styled"

export const Colours = () => {
    return <ColoursBox>
        <ColoursTextBox>
            {crestAndColours.map(colour => {
            const { id, content } = colour
            return <ColoursText key={id}>
                {content}
            </ColoursText>
        })}
        </ColoursTextBox>
        <CrestsList>
            {crests.map(crest => {
            const { src, sub, alt } = crest
                return <CrestsItem key={nextId()}>
                    <CrestsImg src={src} alt={alt} />
                    <CrestsDescr>{sub}</CrestsDescr>
                </CrestsItem>
        })}
        </CrestsList>
        
    </ColoursBox>
}