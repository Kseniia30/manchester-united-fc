import { contacts } from "data/contacts"
import nextId from "react-id-generator"
import {ContactsList, ContactsItem, ContactsLink, ContactsImg} from "./Contacts.styled"
import logo from 'images/logo.png';

export const Contacts = () => {
    return <ContactsList>
        {contacts.map(contact => {
            const { href, svg } = contact
            return <ContactsItem key={nextId()}>
                <ContactsLink href={href} target="_blank" rel="noreferrer">
                    {svg ? svg : <ContactsImg src={logo} alt="logo" />}
                    {/* {typeof svg === "string" ?
                        <ContactsImg src={svg} alt="logo" /> :
                        svg
                    } */}
                </ContactsLink>
            </ContactsItem>
        })}
    </ContactsList>
}