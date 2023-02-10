/** @jsxImportSource @emotion/react */
import CommunityBody from '../CommunityBody/CommunityBody';
import CommunityHeader from '../CommunityHeader/CommunityHeader';
import { popularPostContainerStyle, popularPostStyle, viewsStyle } from './CommunityPopularPost.style';

export default function PopularSquarePost({ img, username, hashtags, title, views }) {
  return (
    <div css={popularPostContainerStyle}>
      <div css={popularPostStyle}>
        <CommunityBody hashtags={hashtags} title={title} />
        <div css={viewsStyle}>{`조회수 ${views}`}</div>
        <CommunityHeader img={img} username={username} />
      </div>
    </div>
  );
}
