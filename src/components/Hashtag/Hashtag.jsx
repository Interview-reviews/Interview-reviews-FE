/** @jsxImportSource @emotion/react */

export default function Hashtags({ hashtags }) {
  return (
    <>
      <div css={{ color: '#5C8AFF', fontWeight: '400', fontSize: '14px' }}>
        {hashtags.map((hashtag, index) => (
          <span key={index}>{`#${hashtag}`}</span>
        ))}
      </div>
    </>
  );
}
