import styled from "styled-components";
import Home from "./components/Home/Home";
import HomeBg from "./assets/Home_bg.svg";
import User from "./components/User/User";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 1rem;
  background-image: url(${HomeBg});
`;

function App() {
  return (
    <Container>
      {/* <Home /> */}
      <User />
    </Container>
  );
}

export default App;
