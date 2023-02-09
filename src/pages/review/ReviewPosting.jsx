/* eslint-disable */
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const reviewBlock = css`
  width: 80em;
  min-height: 20em;
  max-height: 30em;
  margin: 10px 20px 10px 100px;
  border: 1.5px solid #5c8aff;
  box-shadow: 0px 10px 42px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  cursor: pointer;
`;

const upper = css`
  justify-content: center;
  padding: 20px;
  display: flex;
`;

const upperLeft = css`
  width: 40%;
`;

const upperMiddle = css`
  width: 40%;
`;

const upperRight = css`
  width: 30%;
  font-size: 14px;
  font-weight: 500;
  color: #9d9d9d;
`;

const viewText = css`
  margin: 0 2em 0 1em;
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

const mainDiv = css``;

const divLine = css`
  color: #e5eaef;
  margin-bottom: 10px;
`;

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

const detailBtn = css`
  text-decoration: none;
  color: black;
  position: right;
`;

const leftDiv = css`
  width: 40%;
  display: inline-block;
`;
const middleDiv = css`
  width: 48%;
  display: inline-block;
`;
const rightDiv = css`
  width: 12%;
  display: inline-block;
`;

const btnStyle = css`
  font-size: 12px;
  padding: 1em 2em;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    opacity: 70%;
  }
`;

export default function ReviewPosting(props) {
  const [likeTotal, setLikeTotal] = useState(0);
  const [viewTotal, setViewTotal] = useState(0);

  const countView = e => {
    e.preventDefault();
    setViewTotal(viewTotal + 1);
  };

  const makeDateText = () => {
    const year = props.info.Date[0];
    const month = String(props.info.Date[1]).length === 1 ? '0' + props.info.Date[1] : props.info.Date[1];
    const day = String(props.info.Date[2]).length === 1 ? '0' + props.info.Date[2] : props.info.Date[2];
    return (
      <label>
        {year}.{month}.{day}
      </label>
    );
  };

  return (
    <>
      <div css={reviewBlock} onClick={countView}>
        <div css={upper}>
          <div css={upperLeft}>
            <label css={companyLabel}>{props.info.Company}</label>
            <label css={bar}>|</label>
            <label css={resultLabel}>{props.info.Result}</label>
            <label css={jobLabel}>{props.info.Job}</label>
            <label css={carrerLabel}>{props.info.Career}</label>
          </div>
          <div css={upperMiddle} />
          <div css={upperRight}>
            <label>좋아요 {likeTotal} </label>
            <label css={viewText}>조회수 {viewTotal} </label>
            {makeDateText()}
          </div>
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
            <div css={leftDiv}>
              <label css={levelTitle}>면접 유형</label>
              <label css={levelLabel}>{props.info.Level}</label>
              <label css={bar}>|</label>
              <label css={levelTitle}>면접 난이도</label>
              <label css={levelLabel}>{props.info.Level}</label>
            </div>
            <div css={middleDiv}></div>
            <div css={rightDiv}>
              <Link
                to={`/Review/ReviewDetailPage/${props.info.idx}`}
                state={{
                  idx: props.info.idx,
                  title: props.info.Title,
                  company: props.info.Company,
                  result: props.info.Result,
                  job: props.info.Job,
                  career: props.info.Career,
                  support: props.info.Support,
                  content: props.info.Content,
                  level: props.info.Level,
                  date: props.info.Date,
                }}
                css={detailBtn}>
                <button css={btnStyle}>상세보기 ➡️</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
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
