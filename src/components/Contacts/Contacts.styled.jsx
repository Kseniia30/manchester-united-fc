import styled from "styled-components"

const ContactsList = styled.ul`
    display: flex;
    align-items: center;
        justify-content: center;
`
const ContactsItem = styled.li`
    :not(:last-child) {
        margin-right: 20px;
    }
`
const ContactsLink = styled.a`
    color: red;
`
const ContactsImg = styled.img`
    width: 30px;
    height: 30px;
`

export {ContactsList, ContactsItem, ContactsLink, ContactsImg}