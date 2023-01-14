import { Link } from "react-router-dom";
import { checkLogin } from "../API/LoginAPI";
import Nav from "../components/Nav";
import styled from "styled-components";
import { useState } from "react";

const LoginContainer = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  width: 360px;
  margin-left: -150px;
`;

const LoginFont = styled.div`
  font-weight: 600;
  font-size: 26px;
  padding: 0 0 60px 120px;
`;

const InputContainer = styled.div`
  display: inline;
`;

const LoginInput = styled.input`
  font-weight: 530;
  font-size: 14px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  width: 335px;
  height: 40px;
  padding-left: 10px;
`;

const FindContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  font-size: 13px;
`;

const Find = styled.div`
  font-weight: 400;
  color: gray;
`;

const ClickButton = styled.button`
  border: none;
  border-radius: 8px;
  color: white;
  width: 340px;
  height: 47px;
  font-size: 16px;
  &:hover {
    opacity: 70%;
    cursor: pointer;
  }
`;

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onIdHandler = (e) => {
    setId(e.target.value);
  };

  const onPwdHandler = (e) => {
    setPassword(e.target.value);
  };

  console.log(id, password);

  const attemptLogin = async () => {
    const info = { UserName: id, Password: password };
    const isAllow = await checkLogin(info);
    if (isAllow) {
    }
  };
  return (
    <>
      <Nav />
      <LoginContainer>
        <LoginFont>로그인</LoginFont>

        <InputContainer>
          <div>
            <div>
              <LoginInput
                type="text"
                placeholder="아이디를 입력해주세요."
                onChange={onIdHandler}
              />
            </div>
            <div>
              <LoginInput
                type="text"
                placeholder="비밀번호를 입력해주세요."
                onChange={onPwdHandler}
              />
            </div>
          </div>
        </InputContainer>

        <FindContainer>
          <Link
            style={{ textDecoration: "none", paddingRight: "15px" }}
            to="/FindId"
          >
            <Find>아이디 찾기</Find>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/FindPassword">
            <Find>비밀번호 찾기</Find>
          </Link>
        </FindContainer>
        <div>
          <ClickButton
            onClick={attemptLogin}
            style={{ background: "#5c8aff", marginBottom: "10px" }}
          >
            로그인
          </ClickButton>
        </div>
        <Link to="/SignUp">
          <ClickButton style={{ background: "#232323" }}>회원가입</ClickButton>
        </Link>
      </LoginContainer>
    </>
  );
};

export default Login;
