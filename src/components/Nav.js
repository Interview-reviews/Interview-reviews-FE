import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  padding: 20px;
`;

const Navi = styled.nav``;

const NavBar = styled.div`
  padding: 0 20px 0 20px;
`;

const Review = styled.div`
  padding: 10px 20px 0 20px;
  text-align: center;
  position: absolute;
  top: 70px;
  right: 40px;
  text-align: center;
  width: 120px;
  height: 30px;
  border-radius: 17.5px;
  color: white;
  background-color: #5c8aff;
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
      <Header>
        <NavBar>홈</NavBar>
        <NavBar>후기글</NavBar>
        <NavBar>커뮤니티</NavBar>
        <NavBar>공지사항</NavBar>
        <Review>후기 작성</Review>
      </Header>
    </>
  );
};

export default Nav;
