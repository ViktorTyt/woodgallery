import AuthNav from "components/AuthNav";
import React from "react";

import {
  HeaderStyled,
  HeaderContainer,
  HeaderNav,
  Link,
} from "./Header.styled";

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderContainer>
        <HeaderNav>
          <Link to="/" id="logo" href="." rel="home">
            <span>Wood Gallery</span>
          </Link>
          <AuthNav />
        </HeaderNav>
      </HeaderContainer>
    </HeaderStyled>
  );
};

export default Header;
