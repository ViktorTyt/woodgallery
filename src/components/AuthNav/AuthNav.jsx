import { Wrapper, Link } from "./AuthNav.styled";

const AuthNav = ({ isMobMenuOpen }) => {
  return (
    isMobMenuOpen && (
      <Wrapper>
        <Link to="/login">Увійти в кабінет</Link>
        <Link to="/register" register="true">
          Зареєструватися
        </Link>
      </Wrapper>
    )
  );
};

export default AuthNav;
