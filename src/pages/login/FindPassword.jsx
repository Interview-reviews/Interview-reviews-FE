import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';

export default function FindPassword() {
  const [toggle, setToggle] = useState(false);

  const postNumber = () => {
    setToggle(true);
  };
  return (
    <>
      <Nav />
      <h3>비밀번호 찾기 페이지</h3>
      <div>
        <h3>아이디</h3>
        <input placeholder="아이디" />
      </div>
      <div>
        <h3>이메일</h3>
        <input placeholder="이메일" />
        <button onClick={postNumber}>이메일 인증</button>
      </div>
      {toggle && (
        <div>
          <h3>인증번호</h3>
          <input placeholder="인증번호" />
        </div>
      )}

      <Link to="/ResetPassword">
        <button>비밀번호 찾기</button>
      </Link>
    </>
  );
}
