/* eslint-disable */
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { checkLogin, getLogin } from '../../API/LoginAPI';
import Nav from '../../components/Nav';

const loginContainer = css`
  position: absolute;
  top: 35%;
  left: 50%;
  width: 360px;
  margin-left: -150px;
`;

const loginFont = css`
  font-weight: 600;
  font-size: 26px;
  padding: 0 0 60px 120px;
`;

const inputContainer = css`
  display: inline;
`;

const loginInput = css`
  font-weight: 530;
  font-size: 14px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  width: 335px;
  height: 40px;
  padding-left: 10px;
`;

const findContainer = css`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  font-size: 13px;
`;

const find = css`
  font-weight: 400;
  color: gray;
`;

const clickButton = css`
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

export default function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onIdHandler = e => {
    setId(e.target.value);
  };

  const onPwdHandler = e => {
    setPassword(e.target.value);
  };

  checkLogin();
  getLogin();

  const attemptLogin = async () => {
    getLogin();
    const info = { UserName: id, Password: password };
    const isAllow = await checkLogin(info);
    if (isAllow) {
    }
  };
  return (
    <>
      <Nav />
      <div css={loginContainer}>
        <div css={loginFont}>로그인</div>

        <div css={inputContainer}>
          <div>
            <div>
              <input css={loginInput} type="text" placeholder="아이디를 입력해주세요." onChange={onIdHandler} />
            </div>
            <div>
              <input css={loginInput} type="text" placeholder="비밀번호를 입력해주세요." onChange={onPwdHandler} />
            </div>
          </div>
        </div>

        <div css={findContainer}>
          <Link style={{ textDecoration: 'none', paddingRight: '15px' }} to="/FindId">
            <div css={find}>아이디 찾기</div>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/FindPassword">
            <div css={find}>비밀번호 찾기</div>
          </Link>
        </div>
        <div>
          <button css={clickButton} onClick={attemptLogin} style={{ background: '#5c8aff', marginBottom: '10px' }}>
            로그인
          </button>
        </div>
        <Link to="/SignUp">
          <button css={clickButton} style={{ background: '#232323' }}>
            회원가입
          </button>
        </Link>
      </div>
    </>
  );
}
