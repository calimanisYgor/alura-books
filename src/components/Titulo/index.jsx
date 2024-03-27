import styled from "styled-components";

export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.color || '#000000'};
    font-size: ${props => props.size || '18px'};
    text-align: ${props => props.aligment || 'center'};
    margin: 0;
`


