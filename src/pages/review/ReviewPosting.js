/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

const reviewBlock = css`
  width: 80em;
  min-height: 20em;
  max-height: 30em;
  margin: 10px 20px 10px 100px;
  border: 1.5px solid #5c8aff;
  box-shadow: 0px 10px 42px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
`;

const upper = css`
  justify-content: center;
  padding: 20px;
`;

const companyLabel = css`
  font-size: 16px;
  font-weight: 600;
  padding: 10px;
`;

const bar = css`
  color: #bdbdbd;
`;

const resultLabel = css`
  font-size: 14px;
  color: #5c8aff;
  padding: 10px;
`;

const jobLabel = css`
  padding: 4px 6px;
  background-color: #e5f0ff;
  border-radius: 6px;
  margin: 10px 20px;
`;

const carrerLabel = css`
  padding: 4px 6px;
  background-color: #d1ffca;
  border-radius: 6px;
`;

const supportLabel = css`
  font-size: 13px;
  background-color: #e0e0e0;
  border-radius: 6px;
  padding: 3px 5px;
  margin: 20px 0 10px 20px;
`;

const divLine = css`
  color: #e5eaef;
  margin: 10px 0;
`;

const mainDiv = css``;

const titleP = css`
  font-size: 22px;
  font-weight: 600;
  padding: 1px 2px;
  margin: 10px 20px;
`;

const contentP = css`
  font-size: 16px;
  padding: 1px 2px;
  margin: 10px 20px;
  height: 7em;
`;

const levelTitle = css`
  color: #9d9d9d;
  margin: 10px 20px;
`;

const levelLabel = css`
  padding: 1px 2px;
  margin: 10px 20px;
  background-color: #eceeef;
  border-radius: 6px;
`;

const ReviewPosting = props => {
  return (
    <>
      <div css={reviewBlock}>
        <div css={upper}>
          <label css={companyLabel}>{props.info.Company}</label>
          <label css={bar}>|</label>
          <label css={resultLabel}>{props.info.Result}</label>
          <label css={jobLabel}>{props.info.Job}</label>
          <label css={carrerLabel}>{props.info.Career}</label>
        </div>
        <hr css={divLine} />
        <label css={supportLabel}>{props.info.Support}</label>
        <div css={mainDiv}>
          <div>
            <p css={titleP}>{props.info.Title}</p>
          </div>
          <div>
            <p css={contentP}>{props.info.Content}</p>
          </div>
          <div>
            <label css={levelTitle}>면접 유형</label>
            <label css={levelLabel}>{props.info.Level}</label>
            <label css={bar}>|</label>
            <label css={levelTitle}>면접 난이도</label>
            <label css={levelLabel}>{props.info.Level}</label>
          </div>
        </div>
      </div>
    </>
  );
};
/**
    Career
    Company
    Content
    Interview
    {일반면접: false, 인성면접: false, PT면접: false, 토론면접: false, 임원면접: false, …}
    Job
    Level
    Result
    Support
    Title
     */

export default ReviewPosting;
