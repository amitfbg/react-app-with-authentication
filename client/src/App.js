import styled from "styled-components";
import Home from "./components/Home/Home";
import HomeBg from "./assets/Home_bg.svg";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${HomeBg});
`;

function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;
