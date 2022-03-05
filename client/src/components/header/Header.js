import React from "react";
import styled from "styled-components";
import authService from "../auth/auth";

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
  cursor: pointer;
`;

const Header = () => {
  return (
    <Container>
      <ContainerLeft>Demo Auth</ContainerLeft>
      <ContainerRight onClick={() => authService.endSession()}>
        Logout
      </ContainerRight>
    </Container>
  );
};

export default Header;
