import styled from "styled-components"

const StyledIntro = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #00204B;
    font-family: 'Tilt Neon', sans-serif;
    h1{
        color: #ffff;
        font-size: 80px;
    }
    @media (max-width: 1500px) {
        justify-content: center;
    }
`
const StyledName = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-left: 200px;
    h1{
        img{
            width: 50px;
            margin-right: 5px;
        }
    }
    p{
        align-self: flex-start;
        font-size: 24px;
        font-style: italic;
        color: #fff;
    }
    div{
        width: 500px;
        display: flex;
        gap: 30px;
    }
    a{
        text-decoration: none;
    }
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        width: 150px;
        font-size: 20px;
        font-weight: 800;
        color: #00204B;
        box-shadow: 1px 3px 3px #000000a1;
        padding: 10px;
        border-radius: 20px;
        border: none;
        cursor: pointer;
        img{
            width: 20px;
        }
        &:hover{
            opacity: 0.8;
        }
    }
    @media (max-width: 1500px) {
        padding: 20px;
        text-align: center;
        margin: 0px;
        div{
            justify-content: center;
            margin-bottom: 30px;
            width: 300px;
        }
        p{
            align-self: center;
        }
        button{
            width: auto;
        }
    }
`
const StyledGif = styled.div`
    display: flex;
    justify-content: end;
    margin-right: 150px;
    img{
        width: 800px;
    }
    @media (max-width: 1500px) {
        margin: 0;
        display: none;
    }
`

const Intro = () => {
    return(
        <header>
            <StyledIntro id="intro">
                <StyledName>
                    <h1>Olá, eu sou o <br/> <img src="./midia/logos/j-logo.png" alt="logo da letra J"/>osé Vitor <br/> <img src="./midia/logos/s-logo.png" alt="logo da letra S"/>ilveira</h1>
                    <p>Desenvolvedor FrontEnd</p>
                    <div>
                        <a href="./public/Curriculum Vitae - Jose Vitor da Silveira Cunha.pdf" download>
                            <button>
                                <img src="./midia/logos/cv.png" alt="Ícone do Github"/>  Currículo
                            </button>
                        </a>
                        <a href="https://www.linkedin.com/in/josevitorsilveira/" target="_blank">
                            <button>
                                <img src="./midia/logos/linkedin_icon.png" alt="Ícone do Linkedin"/>  Linkedin
                            </button>
                        </a>
                    </div>
                </StyledName>
                <StyledGif>
                    <img src="./midia/images/my-gif.gif" alt="" />
                </StyledGif>
            </StyledIntro>
            <img className="waves" src="./midia/images/wave.svg" alt="ondas azuis" id="waves"/>
        </header>
    )
}

export default Intro