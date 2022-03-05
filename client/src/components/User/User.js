import React from "react";
import styled from "styled-components";
import Header from "../header/Header";

const Container = styled.div`
  height: 100%;
`;
const ContainerBody = styled.div`
  height: calc(100% - 4rem);
  width: -webkit-fill-available;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  border-radius: 1rem;
  background-color: #ffffff;
`;

function User() {
  return (
    <Container>
      <Header />
      <ContainerBody>Hello</ContainerBody>
    </Container>
  );
}

export default User;
