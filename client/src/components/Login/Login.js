import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Loading from "../Loading/index";
import authService from "../auth/auth";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 20px 0 rgba(31, 38, 135, 0.37);
  border-radius: 1rem;
  color: #000000;
`;

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 2px 4px 14px 0 rgb(31 38 135 / 40%);
  border-radius: 2rem;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: bold;
  width: 90%;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #d4d0e1;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #d4d0e1;
    font-weight: 100;
    font-size: 1rem;
  }
`;

const StyledButton = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: ${({ disabled }) => (disabled ? "" : "pointer")};
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrap = styled.div`
  margin-bottom: 1rem;
  width: 90%;
  &:nth-child(1) {
    margin-top: 1rem;
  }
`;
const Label = styled.div`
  padding: 0 1rem 0.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  color: #ffffff;
`;
const BannerMessage = styled.div`
  padding: 0.5rem 1rem;
  color: red;
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

const LoadingContainer = styled.div`
  display: flex;
  position: relative;
`;

const LinkForSignup = styled.div`
  margin: 1rem 0;
  text-align: center;
`;

const Register = styled.span`
  border-bottom: 2px solid green;
  cursor: pointer;
`;

function Login({ handleClick }) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bannerMsg, setBannerMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      const dataToPost = {
        email,
        password,
      };
      setIsLoading(true);
      const response = await axios.post("/login", dataToPost);
      if (response.status === 200) {
        authService.startSession(response.data);
        setEmail("");
        setPassword("");
        history.push("/user");
      }
    } catch (error) {
      setBannerMsg(
        error?.response?.data?.error ||
          error?.response?.data?.msg ||
          "Please fill all the details..."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainContainer>
      <InputContainer>
        <BannerMessage>{bannerMsg}</BannerMessage>
        <Wrap>
          <Label>Email</Label>
          <StyledInput
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Wrap>
        <Wrap>
          <Label>Password</Label>
          <StyledInput
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Wrap>
      </InputContainer>
      <ButtonContainer onClick={handleSubmit}>
        <StyledButton disabled={isLoading}>Login</StyledButton>
        {isLoading && (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        )}
      </ButtonContainer>
      <LinkForSignup>
        Don't have and account?{" "}
        <Register onClick={handleClick}>Register</Register>
      </LinkForSignup>
    </MainContainer>
  );
}

export default Login;
