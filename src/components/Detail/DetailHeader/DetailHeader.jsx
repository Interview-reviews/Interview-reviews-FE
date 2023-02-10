/** @jsxImportSource @emotion/react */
import MockupData from '../../Community/CommunityPopularPosts/MockupData';
import {
  headerContainer,
  mainInfoStyle,
  imgStyle,
  conetentStyle,
  reactionContainerStyle,
  hrStyle,
} from './DetailHeader.style';
import Hashtags from '../../Hashtag/Hashtag';

export default function DetailHeader() {
  const [{ img, title, username, career, date, body, hashtags, likes, comments, views }] = MockupData.slice(0, 1);

  return (
    <div css={headerContainer}>
      <h2>{title}</h2>
      <div css={mainInfoStyle}>
        <div css={imgStyle}>img</div>
        <div>{username}</div>
        <div>{career}</div>
        <div style={{ color: '#9D9D9D' }}>{date}</div>
      </div>
      <div css={conetentStyle}>
        {body}ㅁ
        ㄴ아ㅓ로마ㅣㄴ오라ㅓㅣㅁ노아ㅓㅣ롬니ㅏ오리ㅏㅁ농라ㅗㄴ아로민오리ㅏㅁㄴ오리ㅏ먼오리ㅏㅁ너오라ㅣㅓ몬이ㅏ러ㅚ안로마ㅣㄴ어ㅗ리ㅏㅓ모
      </div>
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
