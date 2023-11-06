
import styled from 'styled-components'
import Subtitle from '../subtitle'
import ProjectCard from './projectcard'


const ProjectsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 80px;
    padding: 0px 40px;
    margin-bottom: -100px;
    @media (max-width: 1000px) {
        margin-bottom: 10px;
        gap: 40px;
    }
`

const ProjectsSection = styled.section`
    animation: appear 5ms ease-in-out;
    animation-timeline: view();
    animation-range: cover 0% cover 30%;
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


const Projects = () => {
    return(
        <ProjectsSection>
            <Subtitle>Projetos</Subtitle>
            <ProjectsContainer>
                <ProjectCard/>
            </ProjectsContainer>
        </ProjectsSection>
    )
}

export default Projects