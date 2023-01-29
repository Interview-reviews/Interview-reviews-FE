/* eslint-disable */
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

const recentReviewContainer = css`
  width: 15em;
  height: 12em;
  background-color: #ffffff;
  box-shadow: 0px 20px 42px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  margin-right: 3em;
  padding: 2em 1em 0 1em;
  cursor: pointer;
  &:hover {
    opacity: 90%;
  }
`;

const companyLabel = css`
  font-size: 16px;
  font-weight: 600;
  padding: 10px;
`;

const resultLabel = css`
  font-size: 14px;
  color: #5c8aff;
  padding: 10px;
`;

const divLine = css`
  width: 36px;
  border: 1px solid #dedede;
  margin: 0.2em 0 0 0.6em;
`;

const contentStyle = css`
  font-size: 16px;
  font-weight: 600;
  padding: 10px;
`;

const jobLabel = css`
  padding: 4px 6px;
  background-color: #e5f0ff;
  border-radius: 19px;
  margin: 0 0.5em;
`;

const carrerLabel = css`
  padding: 4px 6px;
  background-color: #d1ffca;
  border-radius: 19px;
`;

const middle = css`
  margin-top: 2em;
`;

const footer = css`
  margin-top: 3em;
`;

export default function RecentReview(props) {
  const cutContent = props.info.Content.slice(0, 20) + '...';

  return (
    <>
      <div css={recentReviewContainer}>
        <div>
          <label css={companyLabel}>{props.info.Company}</label>
          <label css={resultLabel}>{props.info.Result}</label>
        </div>
        <hr css={divLine} />
        <div css={middle}>
          <p css={contentStyle}>{cutContent}</p>
        </div>
        <div css={footer}>
          <label css={jobLabel}>{props.info.Job}</label>
          <label css={carrerLabel}>{props.info.Career}</label>
        </div>
      </div>
    </>
  );
}
