import React from "react";
import styled from "styled-components";
import CardBg from "../../assets/Card_bg.svg";
import Login from "../Login/Login";

const Container = styled.div`
  margin: 1rem;
  height: calc(100% - 2rem);
  width: -webkit-fill-available;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  border-radius: 1rem;
  background-color: #fff;
`;
const ContainerLeft = styled.div`
  height: 100%;
  width: 50%;
  background-image: url(${CardBg});
  border-radius: 1rem 0 0 1rem;
  padding: 3rem 1.5rem;
  color: #ffffff;
`;

const TitleHead = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 5rem;
`;
const TitleLeft = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 1rem;
`;
const SubTitleLeft = styled.div``;

const ContainerRight = styled.div`
  width: 50%;
  height: 100%;
  padding: 1rem;
`;
const Wrap = styled.div`
  margin: 3rem 0 2rem;
`;
const Icon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

function Home() {
  return (
    <Container>
      <ContainerLeft>
        <TitleHead>JWT</TitleHead>
        <TitleLeft>Let's build something amazing today.</TitleLeft>
        <SubTitleLeft>
          Maybe some text here will help me see it better.
          <br />
          Let's do it then.
        </SubTitleLeft>
      </ContainerLeft>
      <ContainerRight>
        <Wrap>
          <Icon>👋</Icon>
          <TitleLeft>Welcome</TitleLeft>
          <SubTitleLeft>Let's build.</SubTitleLeft>
        </Wrap>
        <Login />
      </ContainerRight>
    </Container>
  );
}

export default Home;
