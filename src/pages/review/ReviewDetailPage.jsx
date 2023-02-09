/* eslint-disable */
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { useLocation } from 'react-router-dom';
import Nav from '../../components/Nav';

const backStyle = css`
  width: 100%;
  height: 20em;
  background-color: #5c8aff;
  border-radius: 0px 0px 174.5px 174.5px;
  position: absolute;
  z-index: -10;
`;

const titleBlock = css`
  text-align: center;
  margin: 5em 0;
`;

const supportTitle = css`
  font-size: 22px;
  color: #ffff;
`;

const mainBlock = css`
  text-align: center;
`;

const reviewBlock = css`
  display: inline-block;
  z-index: 100;
  width: 80em;
  min-height: 25em;
  max-height: 30em;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 20px;
  cursor: pointer;
  text-align: left;
`;

const textBox = css`
  padding: 2em 2em;
`;

const companyText = css`
  font-size: 18px;
`;

const barStyle = css`
  color: #dfdfdf;
`;

const resultText = css`
  font-size: 14px;
  color: #5c8aff;
`;

const titleDiv = css`
  margin: 1em 0;
`;

const titleText = css`
  font-size: 22px;
`;

const jobDiv = css`
  margin: 2em 0;
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

const dateLabel = css`
  color: #777;
  font-size: 14px;
  padding-left: 2em;
`;

const contentDiv = css`
  margin: 2em 0;
  min-height: 8em;
`;

const levelDiv = css`
  margin: 2em 0;
`;

const levelTitle = css`
  color: #9d9d9d;
  margin: 10px 20px;
`;

const levelLabel = css`
  padding: 0.3em 1em;
  margin: 10px 20px;
  background-color: #eceeef;
  border-radius: 6px;
  font-size: 14px;
`;

const interestDiv = css`
  margin-top: 2em;
`;

const watchText = css`
  margin-right: 2em;
`;

const btnSection = css`
  width: 100%;
  text-align: center;
  margin: 3em 0 10em 0;
`;

const leftDiv = css`
  width: 10%;
  display: inline-block;
  position: left;
`;
const middleDiv = css`
  width: 65%;
  display: inline-block;
`;
const rightDiv = css`
  width: 10%;
  display: inline-block;
  position: right;
`;

const btnStyle = css`
  font-size: 16px;
  padding: 14px 46px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    opacity: 70%;
  }
`;

export default function ReviewDetailPosting() {
  const location = useLocation();
  const [idx, title, company, result, job, career, support, content, level, date] = [
    location.state.idx,
    location.state.title,
    location.state.company,
    location.state.result,
    location.state.job,
    location.state.career,
    location.state.support,
    location.state.content,
    location.state.level,
    location.state.date,
  ];
  return (
    <>
      <Nav />
      <section css={backStyle}></section>
      <section css={titleBlock}>
        <div>
          <p css={supportTitle}>&lt; {support} &gt;</p>
        </div>
      </section>
      <section css={mainBlock}>
        <section css={reviewBlock}>
          <div css={textBox}>
            <div>
              <label css={companyText}>{company}</label>
              <label css={barStyle}> | </label>
              <label css={resultText}>{result}</label>
            </div>
            <div css={titleDiv}>
              <label css={titleText}>{title}</label>
            </div>
            <div css={jobDiv}>
              <label css={jobLabel}>{job}</label>
              <label css={carrerLabel}>{career}</label>
              <label css={dateLabel}>{`${date[0]}.${date[1]}.${date[2]}`}</label>
            </div>
            <div css={contentDiv}>
              <label>{content}</label>
            </div>
            <div css={levelDiv}>
              <label css={levelTitle}>면접유형</label>
              <label css={levelLabel}>{level}</label>
              <label css={barStyle}> | </label>
              <label css={levelTitle}>면접난이도 </label>
              <label css={levelLabel}>{level}</label>
            </div>
            <hr />
            <div css={interestDiv}>
              <label css={watchText}>👀 1247</label>
              <label>❤️ 12</label>
            </div>
          </div>
        </section>
        <section css={btnSection}>
          <div css={leftDiv}>
            <button css={btnStyle}>이전 글</button>
          </div>
          <div css={middleDiv}></div>
          <div css={rightDiv}>
            <button css={btnStyle}>다음 글</button>
          </div>
        </section>
      </section>
    </>
  );
}
