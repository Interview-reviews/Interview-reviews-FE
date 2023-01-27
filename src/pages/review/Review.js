/* eslint-disable */
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import Nav from '../../components/Nav';
import ReviewPosting from './ReviewPosting';

const reviewTitle = css`
  padding: 40px 40px;
  font-size: 32px;
  font-weight: 600;
`;

const Review = () => {
  const reviewInfo = JSON.parse(localStorage.getItem('reviewInfo'));
  console.log(reviewInfo);
  return (
    <>
      <Nav />
      <p css={reviewTitle}>면접후기</p>
      <div>
        {reviewInfo.map(review => (
          <ReviewPosting info={review} />
        ))}
      </div>
    </>
  );
};

export default Review;
