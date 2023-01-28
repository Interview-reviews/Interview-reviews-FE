/* eslint-disable */
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';
import EssentialMark from '../../constant/essentialMark';
import Language from './Language';

const signUpContainer = css`
  position: absolute;
  top: 40%;
  left: 30%;
  border: none;
`;

const signUpFont = css`
  font-weight: 600;
  font-size: 26px;
  margin: 0 0 60px 220px;
`;

const graduateSelect = css`
  font-weight: 530;
  font-size: 14px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  width: 11em;
  height: 42px;
  padding-left: 10px;
`;

const schoolInput = css`
  font-weight: 530;
  font-size: 14px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  width: 17em;
  height: 40px;
  padding-left: 10px;
  margin: 10px 10px;
`;

const majorInput = css`
  font-weight: 530;
  font-size: 14px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  width: 18.5em;
  height: 40px;
  padding-left: 10px;
`;

const gradesInput = css`
  font-weight: 530;
  font-size: 12px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  width: 10em;
  height: 40px;
  padding-left: 10px;
  margin: 10px 10px;
`;

const jobSelect = css`
  font-weight: 530;
  font-size: 14px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  width: 13em;
  height: 40px;
  padding-left: 10px;
`;

const jobGuide = css`
  color: gray;
  font-size: 12px;
  display: inline;
  margin-left: 10px;
`;

const item = css`
  display: inline-block;
  font-weight: 550;
  font-size: 16px;
  line-height: 19px;
  margin: 10px 0;
  width: 130px;
`;

const inputContainer = css`
  list-style: none;
  margin: 20px 0px;
`;

export default function Information(props) {
  const [graduate, setGraduate] = useState('');
  const [school, setSchool] = useState('');
  const [major, setMajor] = useState('');
  const [grades, setGrades] = useState('');
  const [job, setJob] = useState('');
  const [intern, setIntern] = useState('');
  const [language, setLanguage] = useState([]);
  const [showLanguage, setShowLanguage] = useState([]);

  console.log(language);

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const onlyNumber = e => {
    const result = isAllowScore(e.currentTarget.value);
    if (result) {
      setGrades(e.currentTarget.value);
    } else {
      setGrades(grades);
    }
    if (e.currentTarget.value.length === 0) {
      setGrades('');
    }
  };

  const isAllowScore = value => {
    const pattern = /[0-9]|[.]/g;
    return pattern.test(value[value.length - 1]);
  };

  const appendLanguage = e => {
    e.preventDefault();
    const tmp = language;
    const newInfo = new Object();
    newInfo.test = '';
    newInfo.score = 0;
    tmp.push(newInfo);
    setLanguage(tmp);
    setShowLanguage(Object.keys(tmp));
  };

  const deleteLanguage = target => {
    let lastInfo = language.filter((v, idx) => {
      if (idx !== ~~target) return v;
    });
    setLanguage(lastInfo);
    setShowLanguage(Object.keys(lastInfo));
  };

  const orderStore = info => {
    let tmp = language;
    tmp[info[0]].test = info[1];
    tmp[info[0]].score = info[2];
    setLanguage(tmp);
    console.log(language);
  };

  const isAllowSubmit = e => {
    if (!onSubmitHandler()) {
      e.preventDefault();
    }
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    if (graduate === '' || school === '') {
      alert('필수 입력사항을 확인해주세요.');
      return false;
    }

    language = language.filter(info => {
      if (info[0] !== '' && info[1] !== 0) {
        console.log(info[1]);
        return info;
      }
    });

    const key = {
      Nickname: localStorage.getItem('Nickname'),
    };

    const education = {
      Graduate: graduate,
      School: school,
      Major: major,
      Grades: grades,
    };

    const jobInfo = {
      Job: job,
    };

    const languageInfo = {
      Language: language,
    };

    const internInfo = {
      Intern: intern,
    };

    console.log({ key, education, jobInfo, languageInfo, internInfo });

    return true;
  };

  return (
    <>
      <Nav />
      <div css={signUpFont}>회원가입</div>
      <fieldset css={signUpContainer}>
        <div>
          <form style={{ display: 'flex', flexDirection: 'column' }}>
            <ul>
              <li css={inputContainer}>
                <label css={item}>
                  학력
                  <EssentialMark />
                </label>
                <select css={graduateSelect} onChange={e => setGraduate(e.currentTarget.value)}>
                  <option selected value={''}>
                    학교 구분
                  </option>
                  <option>고등학교 졸업</option>
                  <option>대학 졸업 (2,3년)</option>
                  <option>대학교 졸업 (4년)</option>
                  <option>대학원 졸업</option>
                </select>
                <input
                  css={schoolInput}
                  value={school}
                  onChange={e => setSchool(e.currentTarget.value)}
                  placeholder="학교명"
                />
              </li>
              <li css={inputContainer}>
                <label css={item}>추가 사항</label>
                <input
                  css={majorInput}
                  value={major}
                  onChange={e => setMajor(e.currentTarget.value)}
                  placeholder="전공명"
                />
                <input css={gradesInput} value={grades} onChange={onlyNumber} maxLength={4} placeholder="학점 입력" />
              </li>

              <li css={inputContainer}>
                <label css={item}>
                  희망 직무
                  <EssentialMark />
                </label>
                <select css={jobSelect} onChange={e => setJob(e.currentTarget.value)}>
                  <option selected value={''}>
                    직무 구분
                  </option>
                  <option>프론트엔드</option>
                  <option>백엔드</option>
                  <option>빅데이터</option>
                  <option>AI</option>
                  <option>정보보안</option>
                </select>
                <p css={jobGuide}>희망하는 직무 또는 현재 직무를 골라주세요.</p>
              </li>
              <li css={inputContainer} style={{ marginBottom: '50px' }}>
                <label css={item}>어학</label>
                <button onClick={appendLanguage}>+</button>

                <li style={{ marginLeft: '60px', justifyContent: 'center' }}>
                  {Object.keys(language).map((info, idx) => {
                    return (
                      <Language
                        idx={idx}
                        content={language[info]}
                        propFunction={deleteLanguage}
                        storeInfo={orderStore}
                      />
                    );
                  })}
                </li>
              </li>

              <div>
                <label css={item}>인턴 / 대외활동</label>
                <select css={jobSelect} onChange={e => setIntern(e.currentTarget.value)}>
                  <option selected value={''}>
                    횟수
                  </option>
                  <option>1회</option>
                  <option>2회</option>
                  <option>3회</option>
                  <option>4회</option>
                  <option>5회 이상</option>
                </select>
              </div>
            </ul>
            <div style={{ margin: '150px 200px' }}>
              <Link to="/SignUp" style={{ cursor: 'pointer' }}>
                <button>이전</button>
              </Link>
              <Link to="/Welcome" style={{ cursor: 'pointer' }} onClick={isAllowSubmit}>
                <button>회원가입 하기</button>
              </Link>
              <div>
                {' '}
                <button onClick={onSubmitHandler}>확인용</button>
              </div>
            </div>
          </form>
        </div>
      </fieldset>
    </>
  );
}
