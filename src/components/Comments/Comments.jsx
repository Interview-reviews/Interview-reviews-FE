/** @jsxImportSource @emotion/react */
import commentsContainerfrom from './Comments.style';
import Comment from '../Comment/Comment';
import comments from './MockComments';
import WriteComment from '../WriteComment/WriteComment';

export default function Comments() {
  return (
    <div css={commentsContainerfrom}>
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
      <WriteComment />
    </div>
  );
}
