import AuthNav from "components/AuthNav";
import MobHeaderMenu from "components/MobHeaderMenu/MobHeaderMenu";
import Navigation from "components/Navigation/Navigation";
// import { theme, size, device } from "styles";

import React, { useState } from "react";

import {
  HeaderStyled,
  HeaderContainer,
  HeaderNav,
  Link,
  Logo,
} from "./Header.styled";

const Header = () => {
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMobMenuOpen(!isMobMenuOpen);
  };

  console.log(isMobMenuOpen);
  return (
    <HeaderStyled>
      <HeaderContainer>
        <Link to="/" id="logo" href="." rel="home">
          <Logo>Wood Gallery</Logo>
        </Link>
        <HeaderNav>
          {!isMobMenuOpen && <button onClick={handleMenu}>Menu</button>}

          {isMobMenuOpen && (
            <MobHeaderMenu onMenu={handleMenu}>
              <Navigation isMobMenuOpen />
              <AuthNav isMobMenuOpen />
            </MobHeaderMenu>
          )}
          {!isMobMenuOpen && <Navigation />}
          {isMobMenuOpen && <AuthNav />}
        </HeaderNav>
      </HeaderContainer>
    </HeaderStyled>
  );
};

export default Header;
