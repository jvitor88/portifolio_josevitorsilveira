import styled from "styled-components"
import Subtitle from "../subtitle"
import Skills from "./skills"

const StyledSkills = styled.div`
    margin: 100px;
    animation: appear 5ms ease-in-out;
    animation-timeline: view();
    animation-range: cover 0% cover 30%;
    @media (max-width: 550px) {
        margin: 60px 0px;
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

const SkillContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
`

const MySkills = () => {
    return(
        <section>
            <StyledSkills>
                <Subtitle>Skills</Subtitle>
                <SkillContainer>
                    <Skills/>
                </SkillContainer>
            </StyledSkills>
        </section>
    )
}

export default MySkills