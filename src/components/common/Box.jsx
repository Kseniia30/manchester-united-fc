import { Container } from "./Box.styled"

export const Box = ({children}) => {
    return <Container
        initial={{
            y: -70,
            opacity: 0.3,
        }}
        animate={{
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                type: 'cubic-bezier(.49,.99,.82,.98)',
                delayChildren: 0.5,
            },
        }}
    >{children}</Container>
}