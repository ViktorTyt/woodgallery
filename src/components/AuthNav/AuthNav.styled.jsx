import styled from "@emotion/styled";
import { css } from "@emotion/react";
// import { theme } from "styles";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (min-width: 1280px) {
    margin-left: auto;
    flex-direction: row;
  }
`;

export const Link = styled(NavLink)`
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
