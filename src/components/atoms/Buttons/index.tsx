import React, { ReactElement } from "react";
import styled from "styled-components";

export function Button({ children }: { children: string }): ReactElement {
  return <BaseButton>{children}</BaseButton>;
}

const BaseButton = styled.button`
  width: 100px;
  height: 60px;
  background-color: #00a9e1;
  border-radius: 5%;
  font-size: 16px;
`;
