/* eslint-disable */
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { useState } from 'react';
import Nav from '../../components/Nav';

const writeContainer = css`
  position: absolute;
  top: 15%;
  left: 25%;
  border: none;
`;

const writeReviewFont = css`
  font-weight: 600;
  font-size: 26px;
  margin: 100px 0 60px 50px;
`;

const inputContainer = css`
  list-style: none;
`;

const companyWrite = css`
  font-weight: 530;
  font-size: 14px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  width: 437px;
  height: 48px;
  padding-left: 10px;
  margin: 10px 0px 10px 20px;
`;

const supportWrite = css`
  font-weight: 530;
  font-size: 14px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  width: 306px;
  height: 48px;
  padding-left: 10px;
  margin: 10px 0px 10px 20px;
`;

const labelStyle = css`
  display: inline-block;
  padding: 30px 40px 30px 19px;
  width: 140px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  background: #f8fafb;
`;

const contentLabelStyle = css`
  display: inline-block;
  padding: 30px 40px 30px 19px;
  width: 140px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20em;
  background: #f8fafb;
`;

const contentInput = css`
  width: 40em;
  height: 20em;
  maxlength: 200;
  display: inline;
`;

const checkButton = css`
  cursor: pointer;
  width: 120px;
  height: 48px;
  color: #5c8aff;
  border: solid 1px #5c8aff;
  border-radius: 10px;
  background: #ffff;
  margin-left: 10px;
  &:hover {
    opacity: 70%;
    font-weight: 600;
  }
`;

const footer = css`
  margin: 5em 0 3em 20em;
`;

export default function WriteReview() {
  const YEAR = Array.from({ length: 9 }, (_, i) => i + 2015);
  const HALF = ['상반기', '하반기'];
  const [company, setCompany] = useState('');
  const [job, setJob] = useState('');
  const [support, setSupport] = useState('');
  const [interview, setInterview] = useState({
    normal: false,
    tenacity: false,
    pt: false,
    discuss: false,
    executive: false,
    mission: false,
  });
  const [career, setCareer] = useState('');
  const [level, setLevel] = useState('');
  const [result, setResult] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onChangeInterview = e => {
    const target = e.currentTarget.value;
    const tmp = { ...interview };
    tmp[target] = !tmp[target];
    setInterview(tmp);
  };

  const checkOnlyOne = nowCheck => {
    const checkboxes = document.getElementsByName('career');
    checkboxes.forEach((v, i) => {
      if (v['defaultValue'] !== nowCheck.value) {
        checkboxes[i].checked = false;
      }
    });
  };

  const onLevelHandler = e => {
    e.preventDefault();
    setLevel(e.currentTarget.value);
    const clickButton = document.getElementsByName('level');
    clickButton.forEach((btn, idx) => {
      document.getElementById(`levelBtn${idx}`).style.backgroundColor =
        btn.value === e.currentTarget.value ? '#5C8AFF' : '';
    });
  };

  const onResultHandler = e => {
    e.preventDefault();
    setResult(e.currentTarget.value);
    const clickButton = document.getElementsByName('result');
    clickButton.forEach((btn, idx) => {
      document.getElementById(`resultBtn${idx}`).style.backgroundColor =
        btn.value === e.currentTarget.value ? '#5C8AFF' : '';
    });
  };

  const getDate = () => {
    const date = new Date();
    return [date.getFullYear(), date.getMonth() + 1, date.getDate()];
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    let storage = [];
    if (localStorage.getItem('reviewInfo') !== null) {
      storage = JSON.parse(localStorage.getItem('reviewInfo'));
    }
    info['Date'] = getDate();
    const result = [...storage, info];
    console.log(localStorage);
    localStorage.setItem('reviewInfo', JSON.stringify(result));
    console.log(JSON.parse(localStorage.getItem('reviewInfo')));
    alert('작성 완료되었습니다.');
  };
  console.log('로컬', JSON.parse(localStorage.getItem('reviewInfo')));
  const info = {
    Company: company,
    Job: job,
    Support: support,
    Interview: interview,
    Career: career,
    Level: level,
    Result: result,
    Title: title,
    Content: content,
  };

  console.log(info);

  return (
    <>
      <Nav />
      <fieldset css={writeContainer}>
        <div css={writeReviewFont}>면접 후기 등록</div>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <ul>
            <li css={inputContainer}>
              <label css={labelStyle}>지원한 회사</label>
              <input
                style={companyWrite}
                placeholder="지원한 회사명을 입력해주세요."
                onChange={e => setCompany(e.target.value)}
              />
            </li>
            <hr />
            <li css={inputContainer}>
              <label css={labelStyle}>지원한 직무</label>
              <select onChange={e => setJob(e.currentTarget.value)}>
                <option selected value={''}>
                  지원한 직무를 선택해주세요.
                </option>
                <option>프론트엔드</option>
                <option>백엔드</option>
                <option>빅데이터</option>
                <option>AI</option>
                <option>정보보안</option>
              </select>
            </li>
            <hr />
            <li css={inputContainer}>
              <label css={labelStyle}>지원시기</label>
              <select onChange={e => setSupport(e.currentTarget.value)} value={support}>
                <option selected value={''}>
                  지원한시기를 선택해주세요
                </option>
                {YEAR.map(year =>
                  HALF.map(half => (
                    <option value={`${year}년 ${half}`} key={`${year}년${half}`}>
                      {year}년 {half}
                    </option>
                  ))
                )}
              </select>
            </li>
            <hr />
            <li css={inputContainer}>
              <label css={labelStyle}>면접유형</label>
              <input type="checkbox" value="normal" onChange={e => onChangeInterview(e)} />
              일반 면접
              <input type="checkbox" value="tanacity" onChange={e => onChangeInterview(e)} />
              인성 면접
              <input type="checkbox" value="pt" onChange={e => onChangeInterview(e)} />
              PT 면접
              <input type="checkbox" value="discuss" onChange={e => onChangeInterview(e)} />
              토론 면접
              <input type="checkbox" value="executive" onChange={e => onChangeInterview(e)} />
              임원 면접
              <input type="checkbox" value="mission" onChange={e => onChangeInterview(e)} />
              실무 과제 및 시험
            </li>
            <hr />
            <li css={inputContainer}>
              <label css={labelStyle}>면접 당시 경력</label>
              <input
                type="checkbox"
                name="career"
                value="신입"
                onChange={e => {
                  checkOnlyOne(e.target), setCareer(e.currentTarget.value);
                }}
              />
              신입
              <input
                type="checkbox"
                name="career"
                value="경력"
                onChange={e => {
                  checkOnlyOne(e.target), setCareer(e.currentTarget.value);
                }}
              />
              경력
            </li>
            <hr />
            <li css={inputContainer}>
              <label css={labelStyle}>면접 난이도</label>
              <button name="level" id="levelBtn0" value="쉬움" onClick={onLevelHandler}>
                쉬움
              </button>
              <button name="level" id="levelBtn1" value="보통" onClick={onLevelHandler}>
                보통
              </button>
              <button name="level" id="levelBtn2" value="어려움" onClick={onLevelHandler}>
                어려움
              </button>
            </li>
            <hr />
            <li css={inputContainer}>
              <label css={labelStyle}>합격 여부</label>
              <button name="result" id="resultBtn0" value="합격" onClick={onResultHandler}>
                합격
              </button>
              <button name="result" id="resultBtn1" value="대기중" onClick={onResultHandler}>
                대기중
              </button>
              <button name="result" id="resultBtn2" value="불합격" onClick={onResultHandler}>
                불합격
              </button>
            </li>
            <hr />
            <li css={inputContainer}>
              <label css={labelStyle}>제목</label>
              <input placeholder="글 제목을 적어주세요." onChange={e => setTitle(e.target.value)} />
            </li>
            <hr />
            <li css={inputContainer}>
              <label css={contentLabelStyle}>내용</label>
              <textarea
                css={contentInput}
                placeholder="전형 및 면접 진행 방식이나 면접에서 받은 질문에 대해 어떻게 답했는지 등 후기를 적어주세요. (200자 이상)"
                onChange={e => setContent(e.target.value)}
              />
            </li>
          </ul>
          <div css={footer}>
            <button css={checkButton} onClick={onSubmitHandler}>
              작성하기
            </button>
          </div>
        </form>
      </fieldset>
    </>
  );
}
