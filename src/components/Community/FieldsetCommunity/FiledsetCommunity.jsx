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
  textStyle,
} from './FiledsetCommunity.style';

export default function FieldsetCommunity() {
  const textareaRef = useRef();
  const labelRef = useRef();
  const [post, setPostInfo] = useState({ title: '', content: '', hashtags: '' });

  const handleResizeTextareaHeight = e => {
    textareaRef.current.style.height = '3rem';
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight / 17 - 0.5}rem`;
    labelRef.current.style.lineHeight = '5rem';
    labelRef.current.style.lineHeight = `${textareaRef.current.scrollHeight / 12}rem`;

    setPostInfo({ ...post, content: e.target.value });
  };

  return (
    <form css={formStyle} method="post" action="#">
      <h1 css={titleStyle}>커뮤니티 글 작성</h1>
      <fieldset css={fieldsetStyle}>
        <ul>
          <li css={liStyle}>
            <label htmlFor="category" css={labelStyle}>
              <p css={textStyle}>카테고리</p>
            </label>
            <WriteSelect />
          </li>
          <hr css={hrStyle} />

          <li css={liStyle}>
            <label htmlFor="title" css={labelStyle}>
              <p css={textStyle}>제목</p>
            </label>
            <input
              css={inputStyle}
              value={post.title}
              name="title"
              placeholder="글 제목을 적어주세요."
              onChange={e => setPostInfo({ ...post, title: e.target.value })}
              required></input>
          </li>
          <hr css={hrStyle} />

          <li css={liStyle}>
            <label htmlFor="content" css={labelStyle} ref={labelRef}>
              <p css={textStyle}>내용</p>
            </label>
            <textarea
              css={textareaStyle}
              value={post.content}
              name="content"
              placeholder="글 내용을 적어주세요."
              onChange={e => handleResizeTextareaHeight(e)}
              ref={textareaRef}
              required></textarea>
          </li>
          <hr css={hrStyle} />

          <li css={liStyle}>
            <label htmlFor="tags" css={labelStyle}>
              <p css={textStyle}>태그</p>
            </label>
            <input
              css={inputStyle}
              value={post.hashtags}
              name="tags"
              placeholder="해시태그를 입력하세요."
              onChange={e => setPostInfo({ ...post, hashtags: e.target.value })}></input>
          </li>
          <hr css={hrStyle} />
        </ul>
        <Button />
      </fieldset>
    </form>
  );
}
