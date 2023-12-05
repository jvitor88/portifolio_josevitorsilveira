import styled from "styled-components"
import Subtitle from "../subtitle"

const StyledAbout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5em;
    margin-top: -200px;
    animation: appear 5ms ease-in-out;
    animation-timeline: view();
    animation-range: cover 0% cover 30%;
    img{
        width: 350px;
        border-radius: 300px;
        box-shadow: 5px 5px 5px #000000be;
    }
    @media (max-width: 1000px) {
        flex-direction: column;
        margin-top: 50px;
    }
    @media (max-width: 600px) {
        flex-direction: column;
        margin-top: 50px;
        img{
            width: 300px;
        }
    }
    @keyframes appear {
        from {
            opacity: 0;
            translate: 0 +10vw;
        }
        
        to {
            opacity: 1;
            translate: 0 0;
        }
    }
`
const StyledText = styled.div`
    width: 500px;
    p{
        font-family: 'Gabarito', sans-serif;
        font-size: 20px;
        text-align: justify;
        
    }
    @media (max-width: 550px) {
        width: 300px;
    }
`

const AboutMe = () => {
    return( 
        <section>
            <StyledAbout id="aboutme">
                <img src="./images/Foto-perfil.jpg" alt="Foto de José Silveira" />
                <StyledText>
                    <Subtitle>Sobre Mim</Subtitle>
                    <p>Meu nome é José Vitor Silveira, tenho 26 anos e sou de São Gonçalo/RJ. Trabalho com suporte de TI, mas meu objetivo é me dedicar a área de desenvolvimento. Sou comunicativo, detalhista e gosto de trabalhar em equipe. Estou sempre buscando aprender e acompanhar as novidades tecnológicas e quero crescer na área de desenvolvimento para contribuir com meu empenho e dedicação a tornar ideias em produtos reais.</p>
                </StyledText>
            </StyledAbout>
        </section>
    )

}

export default AboutMe