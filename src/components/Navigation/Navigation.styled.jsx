import styled from "@emotion/styled";
import { device, theme } from "styles";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${device.tablet} {
    margin-left: 8px;
    flex-direction: row;
    width: 360px;
  }

  ${device.desktop} {
    margin-left: 28px;
    width: 660px;
  }
`;

export const Link = styled(NavLink)`
  position: relative;
  padding: 12px 8px;
  border-radius: 4px;
  font-size: ${theme.fontSizes.medium};
  text-decoration: none;
  text-transform: uppercase;
  color: gray;
  font-weight: 500;
  transition: background-color ${theme.animation.cubicBezierV2};

  ${device.tabletOnly} {
    padding: 40px 8px;
  }

  &:hover {
    color: palevioletred;
  }

  &.active {
    color: palevioletred;
  }

  &.active::after {
    position: absolute;
    right: 0;
    bottom: -2px;
    content: "";
    display: inline-block;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: palevioletred;
  }
`;
