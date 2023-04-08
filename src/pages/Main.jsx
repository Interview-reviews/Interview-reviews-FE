/* eslint-disable */
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { checkLogin, getLogin } from '../API/LoginAPI';
import MainSearch from '../components/Main/MainSearch';
import ReviewBox from '../components/Main/ReviewBox';
import Nav from '../components/Nav';
import RecentReview from './review/RecentReview';

const popularContainer = css`
  margin: 3em 7em 10em 7em;
  display: flex;
`;

const popularTitleContainer = css`
  margin: 5em 0 0 7em;
`;

const popularTitle = css`
  font-size: 32px;
  font-weight: 600;
`;

const reviewContainer = css`
  width: 90%;
  margin: 3em 0em 10em 7em;
  display: inline-block;
`;

export default function Main() {
  const reviewInfo = JSON.parse(localStorage.getItem('reviewInfo'));

  checkLogin();
  getLogin();

  return (
    <>
      <Nav />
      <MainSearch />
      <section>
        <div css={popularTitleContainer}>
          <p css={popularTitle}>많이 본 후기글</p>
        </div>
        <div css={popularContainer}>
          {reviewInfo === undefined
            ? ''
            : reviewInfo.map((review, idx) => (idx < 4 ? <RecentReview info={review} /> : ''))}
        </div>
      </section>
      <section>
        <div css={popularTitleContainer}>
          <p css={popularTitle}>면접 후기</p>
        </div>
        <div css={reviewContainer}>
          {reviewInfo === undefined
            ? ''
            : reviewInfo.map((review, idx) => (idx < 10 ? <ReviewBox info={review} /> : ''))}
        </div>
      </section>
      <section>{/* 성민님 작성하실 부분 */}</section>
    </>
  );
}
