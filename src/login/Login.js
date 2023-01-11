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
    </>
  );
};

export default Login;
