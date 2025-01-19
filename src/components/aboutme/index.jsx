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
                    <p>Meu nome é José Vitor Silveira, tenho 27 anos, e sou profissional da área de varejo, atuando em áreas como BI, financeira e administrativa. Com foco em mensuração e agrupamento de informações de 11 unidades supermercadistas.</p>
                    <p>Atuei na criação e apresentações de dashboards e DRE direta aos C-levels, além de desenvolver ETLs e indicadores-chave (KPIs) para suporte estratégico. Atualmente, estou concluindo uma pós-graduação em Analytics e Business Intelligence pela PUC Minas.</p>
                </StyledText>
            </StyledAbout>
        </section>
    )

}

export default AboutMe