import styled from 'styled-components'
import projectfiles from '../../data/projects.json'

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    border-radius: 10px 10px 10px 10px;
    color: #ffffff;
    box-shadow: 5px 5px 5px #000000be;
    font-family: 'Gabarito', sans-serif;
    h3{
        margin-bottom: 15px;
    }
    p{
        text-align: justify;
    }
    @media (max-width: 450px) {
        width: 320px;
    }
`

const ImageContainer = styled.div`
    width: 400px;
    height: 200px;
    border-radius: 10px 10px 0px 0px;
    background-image: ${ props => props.$src ? props.$src : ''};
    background-size: cover;
    transition: 0s background-color;
    a > img {
        width: 50px;
        padding: 5px;
        border: 2px solid #fff;
        border-radius: 100px;
        &:hover{
            transform: scale(1.1);
        }
    }
    @media (max-width: 450px) {
        width: 320px;
    }
`

const Links = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    width: 400px;
    height: 200px;
    border-radius: 10px 10px 0px 0px;
    background-color: #000000a9;
    opacity: 0;
    /* &:hover{
        opacity: 1;
        transition-delay:0.2s;
    }
    @media (max-width: 450px) {
        width: 320px;
    } */
`

const StyledDesc = styled.div`
    width: 400px;
    height: 150px;
    padding: 10px;
    border-radius: 0px 0px 10px 10px;
    background-color: #00204B;
    @media (max-width: 450px) {
        width: 320px;
    }
`

const ProjectCard = () => {
    return(
        (projectfiles.map(project => 
        <StyledCard key={project.id}>
            <ImageContainer $src={project.image}>
                <Links>
                    {/* <a href={project.gitlink} target='_blank'> */}
                        <img src="./midia/logos/github.svg" alt="Ícone do Github"/>
                    {/* </a> */}
                    {/* <a href={project.pagelink} target='_blank'> */}
                        <img src="./midia/logos/link.svg" alt="Ícone de Link"/>
                    {/* </a> */}
                </Links>
            </ImageContainer>
            <StyledDesc>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </StyledDesc>
        </StyledCard>
        ))
    )
}

export default ProjectCard