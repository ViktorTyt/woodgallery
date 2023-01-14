import { Wrapper, Link } from "./AuthNav.styled";

const AuthNav = () => {
  const size = {
    mobile: "320px",
    tablet: "768px",
    desktop: "1280px",
  };

  console.log(size.desktop);
  return (
    <Wrapper>
      <Link to="/login">Увійти в кабінет</Link>
      <Link to="/register" register>
        Зареєструватися
      </Link>
    </Wrapper>
  );
};

export default AuthNav;
