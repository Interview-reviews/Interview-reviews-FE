/** @jsxImportSource @emotion/react */
import { useRef, useState } from 'react';
import Button from '../Button/Button';
import WriteSelect from '../WriteSelect/WriteSelect';
import {
  liStyle,
  labelStyle,
  hrStyle,
  fieldsetStyle,
  inputStyle,
  formStyle,
  textareaStyle,
  titleStyle,
} from './FiledsetCommunity.style';

export default function FieldsetCommunity() {
  const textareaRef = useRef();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [hashtags, setHashtags] = useState('');

  const handleResizeHeight = e => {
    textareaRef.current.style.height = '3rem';
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight / 17 - 0.5}rem`;
    setContent(e.target.value);
  };

  return (
    <form css={formStyle} method="post" action="#">
      <h1 css={titleStyle}>커뮤니티 글 작성</h1>
      <fieldset css={fieldsetStyle}>
        <ul>
          <li css={liStyle}>
            <label css={labelStyle}>카테고리</label>
            <WriteSelect />
          </li>
          <hr css={hrStyle} />

          <li css={liStyle}>
            <label css={labelStyle}>제목</label>
            <input
              css={inputStyle}
              placeholder="글 제목을 적어주세요."
              required
              value={title}
              onChange={e => setTitle(e.target.value)}></input>
          </li>
          <hr css={hrStyle} />

          <li css={liStyle}>
            <label css={labelStyle}>내용</label>
            <textarea
              ref={textareaRef}
              value={content}
              onChange={e => handleResizeHeight(e)}
              css={textareaStyle}
              placeholder="글 내용을 적어주세요."
              required></textarea>
          </li>
          <hr css={hrStyle} />

          <li css={liStyle}>
            <label css={labelStyle}>태그</label>
            <input
              css={inputStyle}
              placeholder="해시태그를 입력하세요."
              value={hashtags}
              onChange={e => setHashtags(e.target.value)}></input>
          </li>
          <hr css={hrStyle} />
        </ul>
        <Button />
      </fieldset>
    </form>
  );
}
