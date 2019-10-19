import * as React from "react";
import styled from "styled-components";

export const MainContent = styled.main`
  background-color: #f8f8f8;
  padding: 24px;
`;

export const MainTitle = styled.h2`
  color: #e65100;
  font-size: 16px;
`;

// return 型定義
export default function Home() {
  return (
    <MainContent>
      <MainTitle>HOME</MainTitle>
    </MainContent>
  );
}
