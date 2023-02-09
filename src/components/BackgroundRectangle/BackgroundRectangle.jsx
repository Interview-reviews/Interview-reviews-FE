/** @jsxImportSource @emotion/react */

import divStyle from './BackgroundRectangle.style';

export default function BackgroundRectangle({ color }) {
  return <div css={divStyle(color)} />;
}
