/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { useRef } from 'react';
import Button from '../Button/Button';

const liStyle = css`
  list-style: none;
  display: flex;
  align-items: center;
`;

const labelStyle = css`
  display: block;
  width: 7rem;
  line-height: 5rem;

  background: #f8fafb;
  font-weight: 400;
  font-size: 14px;
  justify-content: center;

  border-radius: 6px;
`;

const hrStyle = css`
  background: #eef0f1;
  height: 1px;
  border: 0;
`;

const fieldsetStyle = css`
  border: none;
  width: 80vw;
`;

const inputStyle = css`
  width: 20vw;
  padding: 10px;

  font-weight: 500;
  font-size: 12px;

  &::placeholder {
    color: #adb1bd;
  }

  border: 1px solid #eaeaea;
  border-radius: 6px;
`;

const formStyle = css`
  padding: 10px;
`;

const textareaStyle = css`
  width: 80%;
  height: 3rem;

  &::placeholder {
    color: #adb1bd;
  }

  font-weight: 500;
  font-size: 12px;

  border: 1px solid #eaeaea;
  border-radius: 6px;
  resize: none;
`;

const selectStyle = css`
  height: 2rem;
  width: 20%;
  border: 1px solid #eaeaea;
  border-radius: 6px;

  &::option[value=''][disabled] {
    display: none;
  }
`;

const title = css`
  position: relative;
  font-weight: 500;
  font-size: 1.5rem;
  margin-left: 2rem;

  padding: 1rem;
`;

export default function FieldsetCommunity() {
  const textareaRef = useRef();

  const handleResizeHeight = () => {
    textareaRef.current.style.height = '3rem';
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight / 16}rem`;
  };

  return (
    <form css={formStyle} method="post">
      <h1 css={title}>커뮤니티 글 작성</h1>
      <fieldset css={fieldsetStyle}>
        <ul>
          <li css={liStyle}>
            <label css={labelStyle}>카테고리</label>
            <select name="category" css={selectStyle} required>
              <option value="" disabled selected>
                카테고리 선택
              </option>
              <option value="Q&amp;A">Q&amp;A</option>
              <option value="Chat">잡담</option>
              <option value="Recommend">인강 추천</option>
            </select>
          </li>
          <hr css={hrStyle} />

          <li css={liStyle}>
            <label css={labelStyle}>제목</label>
            <input css={inputStyle} placeholder="글 제목을 적어주세요."></input>
          </li>
          <hr css={hrStyle} />

          <li css={liStyle}>
            <label css={labelStyle}>내용</label>
            <textarea
              rows={1}
              ref={textareaRef}
              onChange={handleResizeHeight}
              css={textareaStyle}
              placeholder="글 내용을 적어주세요."></textarea>
          </li>
          <hr css={hrStyle} />

          <li css={liStyle}>
            <label css={labelStyle}>태그</label>
            <input css={inputStyle} placeholder="해시태그를 입력하세요."></input>
          </li>
          <hr css={hrStyle} />
        </ul>

        <Button />
      </fieldset>
    </form>
  );
}
