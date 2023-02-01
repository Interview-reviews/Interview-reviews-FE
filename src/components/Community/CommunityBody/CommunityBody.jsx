/** @jsxImportSource @emotion/react */

import Hashtags from '../../Hashtag/Hashtag';

export default function CommunityBody({ hashtags, title, body }) {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',

        justifyContent: 'space-around',

        width: '90%',
        height: '40%',
        margin: '0 auto',
        padding: '0.5em',
      }}>
      <Hashtags hashtags={hashtags} />

      <div css={{ fontSize: '20px', fontWeight: '500' }}>{title}</div>
      <div css={{ fontSize: '16px', fontWeight: '500' }}>{body}</div>
    </div>
  );
}
