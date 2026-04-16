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
        text-indent: 30px;
    }
    @media (max-width: 550px) {
        width: 300px;
    }
`

const AboutMe = () => {
    return( 
        <section>
            <StyledAbout id="aboutme">
                <img src="./midia/images/Foto-perfil.jpg" alt="Foto de José Silveira" />
                <StyledText>
                    <Subtitle>Sobre Mim</Subtitle>
                    <p>Meu nome é José Vitor Silveira, sou Analista de Dados Sênior, formado em Análise de Sistemas e pós-graduado em Business Intelligence. Atuo em gestão orientada a dados, especialista na criação de painéis gerenciais e no desenvolvimento de processos robustos de ETL. Domínio de
ferramentas de BI, Python, Excel Avançado e da Power Platform.</p>
                </StyledText>
            </StyledAbout>
        </section>
    )

}

export default AboutMe
