import styled, { css } from "styled-components";
// import { theme } from "styles";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  @media screen and (max-width: 767.9px) {
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
`;

export const Link = styled(NavLink)`
  width: 120px;
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.register &&
    css`
      background: palevioletred;
      color: white;
    `}
`;
