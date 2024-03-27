import styled from "styled-components";

const Opcao = styled.li`
  min-height: 40px;
  height: 100%;
  padding: 0 15px;
  margin-top: 5px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #000000;
`;

const Opcoes = styled.ul`
  display: flex;
`;

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto) => (
        <Opcao>
          <p>{texto}</p>
        </Opcao>
      ))}
    </Opcoes>
  );
}

export default OpcoesHeader;
