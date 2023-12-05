
import styled from 'styled-components'
import contacts from '../../data/contacts.json'

const StyledCards = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-decoration: none;
    color: #fff;
    font-family: 'Gabarito', sans-serif;
    letter-spacing: 3px;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
`

const ContactCards = () => {
    const Copy = () => {
        navigator.clipboard.writeText("jvsilveira11@gmail.com");
        alert('E-mail copiado para área de transferência')
    }
    return( 
        (contacts.map(contact =>
            contact.name === "E-mail"
            ? 
            <StyledCards key={contact.id} onClick={Copy}>
                <img src={contact.logo} alt={contact.name}/> 
                <h3>{contact.info}</h3>
            </StyledCards>
            :
            <StyledCards href={contact.adress} key={contact.id} target='_blank'>
                <img src={contact.logo} alt={contact.name}/> 
                <h3>{contact.info}</h3>
            </StyledCards>
    ))
    )
}

export default ContactCards