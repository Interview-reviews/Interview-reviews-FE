/* eslint-disable */
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

const reviewList = css`
  width: 50%;
  display: inline-block;
`;

const reviewBoxDiv = css`
  width: 40em;
  height: 7em;
  padding: 0 1em;
  margin: 0 2em 1em 0;
  box-sizing: border-box;
  border: 1px solid #e7e7e7;
  border-radius: 20px;
  display: inline-block;
  position: relative;
  line-height: 7em;
  cursor: pointer;
`;

const reviewBoxInDiv = css`
  display: inline-block;
`;

const companyLabel = css`
  font-size: 18px;
  padding: 10px;
`;

const resultLabel = css`
  font-size: 14px;
  color: #5c8aff;
  padding: 10px;
`;

const leftText = css`
  display: inline-block;
  width: 10em;
  height: 7em;
`;

const middleText = css`
  display: inline-block;
  width: 11em;
  height: 7em;
`;

const jobLabel = css`
  padding: 4px 9px;
  background-color: #e5f0ff;
  border-radius: 10px;
`;

const carrerLabel = css`
  padding: 4px 10px;
  background-color: #caf9ff;
  border-radius: 10px;
  margin-left: 1em;
`;

const likeLabel = css`
  padding-left: 2em;
`;

const watchLabel = css`
  padding-left: 1em;
`;

const dateLabel = css`
  color: #777;
  font-size: 14px;
  padding-left: 2em;
`;

export default function ReviewBox(props) {
  console.log(props);
  return (
    <>
      <section css={reviewList}>
        <div css={reviewBoxDiv}>
          <div css={reviewBoxInDiv}>
            <div css={leftText}>
              <label css={companyLabel}>{props.info.Company}</label>
              <label>|</label>
              <label css={resultLabel}>{props.info.Result}</label>
            </div>
            <div css={middleText}>
              <label css={jobLabel}>{props.info.Job}</label>
              <label css={carrerLabel}>{props.info.Career}</label>
            </div>
            <label css={likeLabel}>❤️ 12</label>
            <label css={watchLabel}>👀 1247</label>
            <label css={dateLabel}>
              {props.info.Date[0]}.{props.info.Date[1]}.{props.info.Date[2]}
            </label>
          </div>
        </div>
      </section>
    </>
  );
}
