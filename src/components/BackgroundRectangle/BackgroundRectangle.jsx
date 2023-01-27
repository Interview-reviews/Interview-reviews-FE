/** @jsxImportSource @emotion/react */

const colors = {
  lightBlue: '#5c8aff',
  darkBlue: '#37415B',
};

export default function BackgroundRectangle({ color }) {
  return (
    <div
      css={{
        width: '100%',
        height: '20em',
        background: colors[color],
        borderRadius: '0px 0px 174.5px 174.5px',
      }}
    />
  );
}
