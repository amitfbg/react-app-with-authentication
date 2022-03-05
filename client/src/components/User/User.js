import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import authService from "../auth/auth";
import Header from "../header/Header";
import GeneralComponent from "./../GeneralComponent/GeneralComponent";

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

const Wrap = styled.div`
  text-align: center;
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Info = styled.div`
  font-size: 1.5rem;
`;

function User() {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(0);

  const getUserData = async (headerData) => {
    try {
      setIsLoading(0);
      const dataToPost = {
        headers: { "x-access-token": headerData?.["auth-token"] },
      };
      const response = await axios.get("/user", dataToPost);
      if (response.status === 200) {
        setUserData(response?.data?.userInfo);
      }
      setIsLoading(1);
    } catch (err) {
      setIsLoading(-1);
    }
  };

  useEffect(() => {
    const headerData = authService.loggedUser();
    if (Object.values(headerData)) {
      getUserData(headerData);
    }
  }, []);

  const getContent = () => {
    if (isLoading === 0) {
      return <GeneralComponent val="Loading" />;
    }
    if (isLoading === -1) {
      return <GeneralComponent val="Error" />;
    }
    return (
      <>
        <Header />
        <ContainerBody>
          <Wrap>
            <Title>Hello 👋 , {userData.name}</Title>
            <Info>Thanks for using our services. 🙂 </Info>
          </Wrap>
        </ContainerBody>
      </>
    );
  };

  return <Container>{getContent()}</Container>;
}

export default User;
