import Header from "./components/PageHeader/";
import styled from "styled-components";
import Pesquisa from "./components/Pesquisa";
import UltimosLancamentos from "./components/UltimosLancamentos";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(76deg, rgba(10,88,102,1) 0%, rgba(2,9,11,1) 100%);
`;

export default function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLancamentos/>
    </AppContainer>
  );
}


















