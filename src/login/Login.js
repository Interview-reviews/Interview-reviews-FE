import { Link } from "react-router-dom";
import { checkLogin } from "../API/LoginAPI";

const Login = () => {
  const attemptLogin = async () => {
    const isAllow = await checkLogin();
    if (isAllow) {
    }
  };
  return (
    <>
      <div>
        <h1>로그인 </h1>
      </div>
      <div>
        <input placeholder="아이디" />
      </div>
      <div>
        <input placeholder="비밀번호" />
      </div>
      <button onClick={attemptLogin}>로그인</button>
      <div>
        <Link to="/SignUp">회원가입</Link>
        <div>
          <Link to="/FindId">아이디 찾기</Link>
          <Link to="/FindPassword">비밀번호 찾기</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
