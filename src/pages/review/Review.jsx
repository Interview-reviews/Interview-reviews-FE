/* eslint-disable */
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import Nav from '../../components/Nav';
import RecentReview from './RecentReview';
import ReviewPosting from './ReviewPosting';

const reviewTitle = css`
  margin-top: 5em;
  padding: 40px 40px;
  font-size: 32px;
  font-weight: 600;
`;

const recentTitleContainer = css`
  position: absolute;
  margin: 2em 0 0 7em;
`;

const newText = css`
  font-size: 22px;
  font-weight: 500;
  color: #ffe978;
`;

const recentTitle = css`
  font-size: 32px;
  font-weight: 600;
  color: #ffffff;
`;

const recentContainer = css`
  position: absolute;
  margin: 10em 7em 5em 7em;
  display: flex;
`;

const backStyle = css`
  width: 100%;
  height: 20em;
  background-color: #5c8aff;
  border-radius: 0px 0px 174.5px 174.5px;
`;

export default function Review() {
  const reviewInfo = JSON.parse(localStorage.getItem('reviewInfo'));
  console.log(reviewInfo);
  return (
    <>
      <Nav />
      <div css={backStyle}>
        <div css={recentTitleContainer}>
          <p css={newText}>New</p>
          <p css={recentTitle}>따끈한 후기</p>
        </div>

        <div css={recentContainer}>
          {reviewInfo === null ? '' : reviewInfo.map((review, idx) => (idx < 4 ? <RecentReview info={review} /> : ''))}
        </div>
      </div>
      <p css={reviewTitle}>면접후기</p>
      <div>{reviewInfo === null ? '' : reviewInfo.map(review => <ReviewPosting info={review} />)}</div>
    </>
  );
}
