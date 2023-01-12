import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  padding: 20px;
`;

const NavBar = styled.div`
  padding: 0 20px 0 20px;
`;

const Nav = () => {
  return (
    <>
      <div>
        <Header>
          <NavBar>
            <Link to="/">로고가 들어갈 영역</Link>
          </NavBar>
          <div style={{ flexGrow: "1" }}></div>
          <NavBar>
            {" "}
            <Link to="/Login">로그인</Link>
          </NavBar>
          <NavBar>
            {" "}
            <Link to="/SignUp">회원가입</Link>
          </NavBar>
        </Header>
      </div>
    </>
  );
};

export default Nav;
