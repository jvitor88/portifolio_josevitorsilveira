import styled from "styled-components"
import Subtitle from "../subtitle"
import ContactCards from "../contactcard"

const ContactContainer = styled.div`
    background-color: #00204B;
    margin-top: -5px;
    padding: 0px 10px 50px 10px;
`

const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 6em;
`

const Contact = () => {
    return(
        <footer>
            <img src="../../src/assets/images/wave-footer.svg" alt="Ondas azuis" />
            <ContactContainer id="contact">
                <Subtitle $cor='#fff'>Contato</Subtitle>
                <CardsContainer>
                    <ContactCards/>
                </CardsContainer>
            </ContactContainer>
        </footer>
    )
}

export default Contact