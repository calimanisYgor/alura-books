import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { livros } from './dadosPesquisa'

const PesquisaContainer = styled.section`
   background-image: linear-gradient(76deg, rgba(10,88,102,1) 0%, rgba(2,9,11,1) 100%);;
   color: #FFF;
   text-align: center;
   padding: 1.8em 0;
   height: 470px;
   width: 100%;
`
const Titulo = styled.h2`
   color: #FFF;
   font-size: 36px;
   text-align: center;
   width: 100%;
`
const Subtitulo = styled.h3`
   font-size: 16px;
   font-weight: 500;
   margin-bottom: 40px;
`
const Resultado = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 20px;
   cursor: pointer;
   p {
       width: 200px;
       font-size: 1.2em;
   }
   img {
       width: 150px;
   }
   &:hover {
       border: 1px solid white;
   }
`

export default function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([])
  function fazPesquisa(evento) {
    const textoDigitado = evento.target.value
    if (textoDigitado.trim() === '') {
      setLivrosPesquisados([]) // Define a lista de livros pesquisados como vazia
    } else {
      const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
      setLivrosPesquisados(resultadoPesquisa)
    }
  }
  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={evento => fazPesquisa(evento)}
      />
      {livrosPesquisados.map(livro => (
        <Resultado>
          <img src={livro.src} />
          <p>{livro.nome}</p>
        </Resultado>
      ))}
    </PesquisaContainer>
  )
}