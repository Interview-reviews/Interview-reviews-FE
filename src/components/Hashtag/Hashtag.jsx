/** @jsxImportSource @emotion/react */

import HashtagStyle from './Hashtag.style';

export default function Hashtags({ hashtags }) {
  return (
    <>
      <div css={HashtagStyle}>
        {hashtags.map((hashtag, index) => (
          <span key={index}>{`#${hashtag}`}</span>
        ))}
      </div>
    </>
  );
}
