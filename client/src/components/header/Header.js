import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 3rem;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
`;
const ContainerLeft = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;
const ContainerRight = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Header = () => {
  return (
    <Container>
      <ContainerLeft>Demo Auth</ContainerLeft>
      <ContainerRight>Logout</ContainerRight>
    </Container>
  );
};

export default Header;
