/** @jsxImportSource @emotion/react */

import CommunityBody from '../CommunityBody/CommunityBody';
import CommunityHeader from '../CommunityHeader/CommunityHeader';

export default function PopularSquarePost({ img, username, hashtags, title, views }) {
  return (
    <div
      css={{
        // border: '1px solid black',
        width: '15em',
        height: '14.5em',

        background: '#FFFFFF',
        boxShadow: '0 20px 42px rgba(0, 0, 0, 0.05)',
        borderRadius: '20px',
      }}>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          width: '80%',
          height: '80%',
          padding: '1em',
        }}>
        <CommunityBody hashtags={hashtags} title={title} />
        <div
          css={{
            padding: '0.5em',
            alignItems: 'center',
            color: '#737373',
            fontWeight: '400',
            fontSize: '13px',
          }}>{`조회수 ${views}`}</div>
        <CommunityHeader img={img} username={username} />
      </div>
    </div>
  );
}
