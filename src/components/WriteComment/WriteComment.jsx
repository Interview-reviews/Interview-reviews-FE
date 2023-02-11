/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import comments from '../Comments/MockComments';
import {
  writeContainer,
  imgContainer,
  inputStyle,
  inputContainer,
  buttonContainer,
  buttonStyle,
} from './WriteComment.style';

export default function WriteComment() {
  const [{ img }] = comments.slice(0, 1);
  const [comment, setComment] = useState('');

  return (
    <div css={writeContainer}>
      <div css={imgContainer}>{img}</div>
      <div css={inputContainer}>
        <input
          value={comment}
          css={inputStyle}
          placeholder="댓글을 입력해주세요."
          onChange={e => setComment(e.target.value)}></input>

        {/* button의 onClick 이벤트 핸들러 => 댓글 추가 */}
        <div css={buttonContainer}>
          <button css={buttonStyle}>댓글 작성</button>
        </div>
      </div>
    </div>
  );
}
