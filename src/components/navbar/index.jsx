import styled from "styled-components"

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background-color: #00204B;
    font-family: 'Righteous', sans-serif;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1;
    img{
        width: 50px;
    }
    @media (max-width: 800px) {
        justify-content: center;
    }
`
const StyledList = styled.ul`
    display: flex;
    align-items: center;
    gap: 60px;
    list-style: none;
    a{  
        color: #ffff;
        text-decoration: none;
        font-size: 24px;
    }
    @media (max-width: 800px) {
    a{
        display: none;
    }
}

`
const ListLink = styled.a`
    li {
    transition: 0.4s;
    color: #ffffff;
    text-decoration: none;
    padding: 0 10px;
    }
    li:hover {
    background-color: #ffffff;
    border-radius: 10px;
    color: #00204B;
    padding: 6px 10px;
}
`

const NavBar = () => {
    return(
        <StyledNav>
                <a href="#intro"><img src="./src/assets/logos/logojs.png" alt="Logo José Silveira"/></a>
            <StyledList>
                <ListLink href="#waves">
                    <li>Sobre Mim</li>
                </ListLink>
                <ListLink href="#aboutme">
                    <li>Skills</li>
                </ListLink>
                <ListLink href="#skills">
                    <li>Projetos</li>
                </ListLink>
                <ListLink href="#contact">
                    <li>Contato</li>
                </ListLink>
            </StyledList>
        </StyledNav>
    )
}

export default NavBar