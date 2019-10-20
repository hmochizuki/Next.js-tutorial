import React, { ReactElement } from "react";
import styled from "styled-components";
import { Button } from "../../atoms//Buttons/index";

export default function Home(): ReactElement {
  return (
    <Container>
      <H1>Home</H1>
      <Button>ボタン</Button>
    </Container>
  );
}

const Container = styled.div``;

const H1 = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;
