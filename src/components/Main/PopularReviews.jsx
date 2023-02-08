/* eslint-disable */
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

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

export default function PopularReviews() {
  return (
    <>
      <div css={recentTitleContainer}>
        <p css={newText}>New</p>
        <p css={recentTitle}>따끈한 후기</p>
      </div>
    </>
  );
}
