/* eslint-disable */
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { useEffect, useState } from 'react';

const languageSelect = css`
  font-weight: 530;
  font-size: 12px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  width: 12em;
  height: 40px;
  padding-left: 10px;
`;

const languageInput = css`
  font-weight: 530;
  font-size: 12px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  width: 9em;
  height: 40px;
  padding-left: 10px;
  margin: 0 10px;
`;

const deleteBtn = css`
  font-weight: 530;
  font-size: 14px;
  width: 6em;
  height: 2.5em;
  border: none;
  color: white;
  background-color: #f48fb1;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 70%;
  }
`;

const language = {
  구분: '0',
  토익: '1',
  토플: '2',
  텝스: '3',
};

export default props => {
  const [test, setTest] = useState('');
  const [score, setScore] = useState(props.score);
  if (props.content.test !== test) {
    document.getElementById(`${props.idx}test`).selectedIndex = language[props.content.test];
    setTest(props.content.test);
  }

  const submitText = e => {
    e.preventDefault();
    props.propFunction(props.idx);
  };

  const orderStore = v => {
    props.storeInfo(v);
  };

  useEffect(() => {
    setScore(props.content.score);
  }, [test]);

  return (
    <>
      <div style={{ textAlign: 'center', margin: '10px 0' }}>
        <select
          id={`${props.idx}test`}
          css={languageSelect}
          onChange={e => {
            setTest(e.currentTarget.value);
            orderStore([props.idx, e.currentTarget.value, score]);
          }}>
          <option selected value={'구분'}>
            구분
          </option>
          <option value={'토익'}>토익</option>
          <option value={'토플'}>토플</option>
          <option value={'텝스'}>텝스</option>
        </select>

        <input
          id={`${props.idx}score`}
          css={languageInput}
          value={score}
          onChange={e => {
            setScore(e.currentTarget.value);
            orderStore([props.idx, test, e.currentTarget.value]);
          }}
          placeholder="급수/점수"
        />
        <button css={deleteBtn} onClick={submitText}>
          삭제
        </button>
      </div>
    </>
  );
};
