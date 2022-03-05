import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/Home/Home";
import HomeBg from "./assets/Home_bg.svg";
import User from "./components/User/User";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 1rem;
  background-image: url(${HomeBg});
`;

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <PrivateRoute exact path="/user" component={User} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
