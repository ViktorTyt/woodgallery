import AuthNav from "components/AuthNav";
import { Wrapper, Link } from "./Navigation.styled";

const Navigation = () => {
  let isLoggedIn = true;

  return (
    <>
      <Wrapper>
        <Link to="/about">Про компанію</Link>
        {isLoggedIn && <Link to="/products">Продукція</Link>}
      </Wrapper>
      <AuthNav />
    </>
  );
};

export default Navigation;
