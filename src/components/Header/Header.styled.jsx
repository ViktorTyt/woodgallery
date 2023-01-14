import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme, size, device } from "styles";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: end;
  width: 100%;
  background-color: ${theme.colors.light};
  box-shadow: ${theme.shadows.small};
`;

export const HeaderContainer = styled.div`
  width: ${size.mobile};
  margin: 0 auto;
  padding: 12px 15px;

  ${device.tablet} {
    width: ${size.tablet};
  }

  ${device.desktop} {
    width: ${size.desktop};
  }
`;

export const HeaderNav = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  align-items: stretch;
  justify-content: space-between;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  color: gray;
  font-weight: 700;
  font-size: 28px;
`;
