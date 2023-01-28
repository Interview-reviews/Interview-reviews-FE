/* eslint-disable */
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const topHeader = css`
  display: flex;
  padding: 20px;
  font-weight: 550;
`;

const bottomHeader = css`
  display: flex;
  padding: 20px;
  font-weight: 550;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
`;

const navBar = css`
  padding: 0 20px 0 20px;
`;

const review = css`
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

export default function Nav() {
  return (
    <>
      <header css={topHeader}>
        <div css={navBar}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            로고가 들어갈 영역
          </Link>
        </div>
        <div style={{ flexGrow: '1' }}></div>
        <div css={navBar}>
          {' '}
          <Link to="/Login" style={{ textDecoration: 'none' }}>
            로그인
          </Link>
        </div>
        <div css={navBar}>
          {' '}
          <Link to="/SignUp" style={{ textDecoration: 'none' }}>
            회원가입
          </Link>
        </div>
      </header>

      <header css={bottomHeader}>
        <div css={navBar}>
          {' '}
          <Link to="/" style={{ textDecoration: 'none' }}>
            홈
          </Link>
        </div>
        <div css={navBar}>
          {' '}
          <Link to="/Review" style={{ textDecoration: 'none' }}>
            후기글
          </Link>
        </div>
        <div css={navBar}>커뮤니티</div>
        <div css={navBar}>공지사항</div>
        <Link to="/WriteReview">
          <div css={review}>후기 작성</div>
        </Link>
      </header>
    </>
  );
}
