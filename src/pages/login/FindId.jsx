/* eslint-disable */
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { useState } from 'react';
import Nav from '../../components/Nav';
import EssentialMark from '../../constant/essentialMark';

const findIdContainer = css`
  text-align: center;
  margin: 10em 0;
`;

const inputContainer = css`
  list-style: none;
  margin: 20px 0px;
`;

const item = css`
  display: inline-block;
  font-weight: 550;
  font-size: 16px;
  line-height: 19px;
  margin: 10px 0;
  width: 140px;
`;

const signUpInput = css`
  font-weight: 530;
  font-size: 14px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  width: 335px;
  height: 40px;
  padding-left: 10px;
`;

const checkButton = css`
  cursor: pointer;
  width: 120px;
  height: 40px;
  color: #5c8aff;
  border: solid 1px #5c8aff;
  border-radius: 10px;
  background: #ffff;
  margin-left: 1em;
  &:hover {
    opacity: 70%;
  }
`;

const emailCheck = css`
  font-size: 12px;
  display: inline;
  margin-left: 10px;
`;

const certification = css`
  margin: 1em 0;
`;

export default function FindId() {
  const [email, setEmail] = useState('');
  const [checkEmail, setCheckEmail] = useState('');
  const isAllowEmail = e => {
    e.preventDefault();
    const regex = /@/ && /.com/;
    if (regex.test(email)) {
      setCheckEmail(true);
      const result = sendEmail();
      // 백단으로 이메일 정보 보내고 인증번호랑 아이디 값 가져오는 로직
    } else {
      setCheckEmail(false);
    }
  };

  const isVaildEmail = e => {
    e.preventDefault();
    alert('인증되었습니다.');
  };

  const getId = () => {
    // 아이디 백단에서 가져오는 로직
  };

  return (
    <>
      <Nav />
      <section css={findIdContainer}>
        <h3>아이디 찾기 페이지</h3>
        <div>
          <li css={inputContainer}>
            <label css={item}>
              이메일
              <EssentialMark />
            </label>
            <input
              css={signUpInput}
              value={email}
              placeholder="@을 포함한 올바른 이메일을 입력해주세요"
              onChange={e => setEmail(e.currentTarget.value)}
            />
            <button css={checkButton} onClick={isAllowEmail}>
              이메일 인증
            </button>
            {checkEmail === '' ? (
              ''
            ) : checkEmail ? (
              <p css={emailCheck} style={{ color: 'blue' }}>
                인증번호를 확인해주세요.
              </p>
            ) : (
              <p
                css={emailCheck}
                style={{
                  color: 'red',
                }}>
                사용할 수 없는 이메일입니다.
              </p>
            )}
            {checkEmail && (
              <div css={certification}>
                <input css={signUpInput} placeholder="인증번호를 입력해주세요" />{' '}
                <button css={checkButton} onClick={isVaildEmail}>
                  인증하기
                </button>
              </div>
            )}
          </li>
        </div>

        <button css={checkButton} onClick={getId}>
          아이디 찾기
        </button>
      </section>
    </>
  );
}
