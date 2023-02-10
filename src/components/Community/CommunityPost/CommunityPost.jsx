/** @jsxImportSource @emotion/react */

import CommunityHeader from '../CommunityHeader/CommunityHeader';
import CommunityBody from '../CommunityBody/CommunityBody';
import { hrStyle, postStyle } from './CommunityPost.style';

export default function CommunityPost({ img, id, username, career, likes, comments, date, hashtags, title, body }) {
  return (
    <div css={postStyle}>
      <CommunityHeader
        key={id}
        img={img}
        username={username}
        career={career}
        likes={likes}
        comments={comments}
        date={date}
      />
      <hr css={hrStyle} />
      <CommunityBody hashtags={hashtags} title={title} body={body} />
    </div>
  );
}
