import styled from "styled-components";

const Subtitle = styled.h2`
    color: ${ props => props.$cor ? props.$cor : '#00204B' };
    font-size: 40px;
    text-align: center;
    margin-bottom: 50px;
    font-family: 'Righteous', sans-serif;
`

export default Subtitle