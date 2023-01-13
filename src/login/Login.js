import { Link } from "react-router-dom";
import { checkLogin } from "../API/LoginAPI";
import Nav from "../components/Nav";
import styled from "styled-components";
import { useState } from "react";

const LoginContainer = styled.div`
  margin-top: 8em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  display: inline;
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
        <div>
          <h1>로그인 </h1>
        </div>
        <InputContainer>
          <div>
            <div>
              <input placeholder="아이디" onChange={onIdHandler} />
            </div>
            <div>
              <input placeholder="비밀번호" onChange={onPwdHandler} />
            </div>
          </div>
          <div>
            <button onClick={attemptLogin}>로그인</button>
          </div>
        </InputContainer>
        <div>
          <Link to="/SignUp">
            <button>회원가입</button>
          </Link>
          <div>
            <Link to="/FindId">
              <button>아이디 찾기</button>
            </Link>
            <Link to="/FindPassword">
              <button>비밀번호 찾기</button>
            </Link>
          </div>
        </div>
      </LoginContainer>
    </>
  );
};

export default Login;
