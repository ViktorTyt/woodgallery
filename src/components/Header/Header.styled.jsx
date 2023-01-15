import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
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
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${device.tablet} {
    width: ${size.tablet};
  }

  ${device.desktop} {
    width: ${size.desktop};
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: space-between;

  ${device.mobileOnly} {
    padding: 8px 0;
  }

  ${device.desktop} {
    align-items: baseline;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: baseline;
  color: gray;
  font-style: italic;
  font-weight: 700;
  font-size: 28px;
`;

export const Logo = styled.span`
  display: flex;
  align-items: center;
`;
