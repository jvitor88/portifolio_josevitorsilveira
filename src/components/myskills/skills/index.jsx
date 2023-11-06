import styled from "styled-components"

import skills from './skills.json'

const SkillBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 150px;
    padding: 10px;
    color: #fff;
    background-color: #00204B;
    border-radius: 20px 0px;
    span{
        font-family: 'Gabarito', sans-serif;
    }
    img{
        width: 40px;
    }
    &:hover{
        transform:scale(1.1);
        box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
    }
    @media (max-width: 550px) {
        gap: 2px;
        width: 120px;
    }
`

const Skills = () => {
    return(
            (skills.map(skill => 
            <SkillBox key={skill.id} id='skills'>
                <span>{skill.nome}</span>
                <img src={skill.logo} alt={skill.nome} />
            </SkillBox> ) ) 
    )
}

export default Skills