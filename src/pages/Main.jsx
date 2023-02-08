/* eslint-disable */
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import MainSearch from '../components/Main/MainSearch';
import Nav from '../components/Nav';
import RecentReview from './review/RecentReview';

const recentContainer = css`
  margin: 5em 7em 10em 7em;
  display: flex;
`;

const popularTitleContainer = css`
  margin: 5em 0 0 7em;
`;

const popularTitle = css`
  font-size: 32px;
  font-weight: 600;
`;

export default function Main() {
  const reviewInfo = JSON.parse(localStorage.getItem('reviewInfo'));

  return (
    <>
      <Nav />
      <MainSearch />
      <div css={popularTitleContainer}>
        <p css={popularTitle}>많이 본 후기글</p>
      </div>
      <div css={recentContainer}>
        {reviewInfo.map((review, idx) => (idx < 4 ? <RecentReview info={review} /> : ''))}
      </div>
      <div css={popularTitleContainer}>
        <p css={popularTitle}>면접 후기</p>
      </div>
    </>
  );
}
