import { Link } from "react-router-dom";
import styled from "styled-components";

const TopHeader = styled.header`
  display: flex;
  padding: 20px;
  font-weight: 550;
`;

const BottomHeader = styled.header`
  display: flex;
  padding: 20px;
  font-weight: 550;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  width: 100%;
`;

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
  &:hover {
    opacity: 80%;
    cursor: pointer;
  }
`;

const Nav = () => {
  return (
    <>
      <TopHeader>
        <NavBar>
          <Link to="/" style={{ textDecoration: "none" }}>
            로고가 들어갈 영역
          </Link>
        </NavBar>
        <div style={{ flexGrow: "1" }}></div>
        <NavBar>
          {" "}
          <Link to="/Login" style={{ textDecoration: "none" }}>
            로그인
          </Link>
        </NavBar>
        <NavBar>
          {" "}
          <Link to="/SignUp" style={{ textDecoration: "none" }}>
            회원가입
          </Link>
        </NavBar>
      </TopHeader>

      <BottomHeader>
        <NavBar>
          {" "}
          <Link to="/" style={{ textDecoration: "none" }}>
            홈
          </Link>
        </NavBar>
        <NavBar>후기글</NavBar>
        <NavBar>커뮤니티</NavBar>
        <NavBar>공지사항</NavBar>
        <Link to="/WriteReview">
          <Review>후기 작성</Review>
        </Link>
      </BottomHeader>
    </>
  );
};

export default Nav;
