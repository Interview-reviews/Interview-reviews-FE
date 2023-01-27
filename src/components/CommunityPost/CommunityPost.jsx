/** @jsxImportSource @emotion/react */

import CommunityHeader from '../CommunityHeader/CommunityHeader';
import CommunityBody from '../CommunityBody/CommunityBody';

export default function CommunityPost({ img, id, username, career, likes, comments, date, hashtags, title, body }) {
  return (
    <div
      css={{
        width: '30em',
        height: '13em',

        border: '1px solid #E7E7E7',
        boxShadow: '0px 10px 42px rgba(0, 0, 0, 0.05)',
        borderRadius: '20px',
      }}>
      <CommunityHeader
        key={id}
        img={img}
        username={username}
        career={career}
        likes={likes}
        comments={comments}
        date={date}
      />

      <hr css={{ width: '90%', margin: 'auto', background: '#E5EAEF' }} />

      <CommunityBody hashtags={hashtags} title={title} body={body} />
    </div>
  );
}
