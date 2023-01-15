import { Wrapper, Link } from "./Navigation.styled";

const Navigation = ({ isMobMenuOpen }) => {
  let isLoggedIn = true;

  return (
    isMobMenuOpen && (
      <Wrapper>
        <Link to="/about">Про компанію</Link>
        {isLoggedIn && <Link to="/products">Продукція</Link>}
      </Wrapper>
    )
  );
};

export default Navigation;
