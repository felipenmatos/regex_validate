import styled from 'styled-components';
import './App.css';
import Input from './Componentes/Input';

function App() {
  return (
    <ContainerPage>
      <Input />
    </ContainerPage>    
  );
}

const ContainerPage = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

export default App;
