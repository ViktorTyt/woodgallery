import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Backdrop = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 280px;
  width: 180px;
  background-color: white;
  z-index: 99;
  overflow: scroll;
`;

export const CloseMenuBtn = styled.button`
  width: 120px;
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 0.25em 1em;

  ${(props) =>
    props.register &&
    css`
      background: palevioletred;
      color: white;
    `}
`;
