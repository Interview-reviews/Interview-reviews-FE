/** @jsxImportSource @emotion/react */
import MockupData from '../../Community/CommunityPopularPosts/MockupData';
import {
  headerContainer,
  mainInfoStyle,
  imgStyle,
  contentStyle,
  reactionContainerStyle,
  hrStyle,
} from './DetailHeader.style';
import Hashtags from '../../Hashtag/Hashtag';
import Career from '../../Career/Career';

export default function DetailHeader() {
  const [{ img, title, username, career, date, body, hashtags, likes, comments, views }] = MockupData.slice(0, 1);

  return (
    <div css={headerContainer}>
      <h2>{title}</h2>
      <div css={mainInfoStyle}>
        <div css={imgStyle}>img</div>
        <div>{username}</div>
        <Career career={career} />
        <div style={{ color: '#9D9D9D' }}>{date}</div>
      </div>

      <div css={contentStyle}>{body}</div>
      <Hashtags hashtags={hashtags} />

      <hr css={hrStyle} />
      <div css={reactionContainerStyle}>
        <div>조회수 {views}</div>
        <div>좋아요 {likes}</div>
        <div>댓글 {comments}</div>
      </div>
    </div>
  );
}
