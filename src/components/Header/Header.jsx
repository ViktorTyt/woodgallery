import MainVideo from "components/MainVideo";
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
  MenuBtn,
  HeaderNavTabDesk,
} from "./Header.styled";

const Header = () => {
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMobMenuOpen(!isMobMenuOpen);
  };

  console.log(isMobMenuOpen);
  return (
    <>
      <HeaderStyled>
        <HeaderContainer>
          <Link to="/" id="logo" href="." rel="home">
            <Logo>Wood Gallery</Logo>
          </Link>
          <HeaderNav>
            {!isMobMenuOpen && <MenuBtn onClick={handleMenu}>Меню</MenuBtn>}

            {isMobMenuOpen && (
              <MobHeaderMenu onMenu={handleMenu}>
                <Navigation />
              </MobHeaderMenu>
            )}
            <HeaderNavTabDesk>
              {!isMobMenuOpen && <Navigation />}
            </HeaderNavTabDesk>
          </HeaderNav>
        </HeaderContainer>
      </HeaderStyled>
      <MainVideo />
    </>
  );
};

export default Header;
