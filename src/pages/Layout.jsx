import { Modal } from "components/Backdrop/Backdrop"
import { Contacts } from "components/Contacts/Contacts"
import { Footer } from "components/Footer/Footer"
import { Header } from "components/Header/Header"
import { MainManu } from "components/MainMenu/MainMenu"
import { logo } from "data/pictures"
import { Suspense, useEffect, useState } from "react"
import { Outlet } from "react-router"
import { LayoutBox, MainLink, MainLogo, StyledBurger } from "./styles/Layout.styled"
import { useLocation } from "react-router";


export const Layout = () => {
    const [showModal, setShowModal] = useState(false)
    const location = useLocation();
    let path = location.pathname

    useEffect(() => { 
        if (window.screen.width < 768) {
            setShowModal(false)
        }
    },[path])

    useEffect(() => {
        if (showModal) {
            document.querySelector('body').style.overflow = 'hidden';
        }
        if (!showModal) {
            document.querySelector('body').style.overflow = 'scroll';
        }
    }, [showModal]);

    const toggleModal = () => {
        setShowModal(showModal => !showModal)
    }

    return <LayoutBox
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
        }}>
        <Header>
            <MainLink to="/">
                <MainLogo src={logo} alt="logo"/>
            </MainLink>
            {window.screen.width < 768 && <button type="button" onClick={toggleModal}><StyledBurger /></button>}
            {window.screen.width > 767 && <MainManu/>}
        </Header>
        <Suspense fallback={null}>
            <Outlet />
        </Suspense>
        <Footer>
            <Contacts/>
        </Footer>
        {showModal && <Modal onClose={toggleModal}>
            <MainManu/>
        </Modal>}
    </LayoutBox>
}