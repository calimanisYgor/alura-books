import { Titulo } from '../Titulo'
import { livros } from './dadosUltimosLancamentos'
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo
                color={"#EB9B00"}
                size={"36px"}
            >
                ÚLTIMOS LANÇAMENTOS
            </Titulo>

            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src} />
                ))}
            </NovosLivrosContainer>
            
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos
