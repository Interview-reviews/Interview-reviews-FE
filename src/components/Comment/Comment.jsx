/** @jsxImportSource @emotion/react */
import {
  commentContaier,
  imgContainer,
  infoContainer,
  headerStyle,
  dateStyle,
  contentStyle,
  replyStyle,
} from './Comment.style';

export default function Comment({ comment }) {
  const { nickname, content, img, time } = comment;

  return (
    <div css={commentContaier}>
      <div css={imgContainer}>{img}</div>
      <div css={infoContainer}>
        <div css={headerStyle}>
          <div>{nickname}</div>
          <div css={dateStyle}>{time}</div>
        </div>
        <div css={contentStyle}>{content}</div>
        <div css={replyStyle}>대댓글달기</div>
      </div>
    </div>
  );
}
