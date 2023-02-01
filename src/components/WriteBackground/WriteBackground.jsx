/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const colors = {
  lightBlue: '#5c8aff',
  darkBlue: '#37415B',
};

const style = color => css`
  background-color: ${colors[color]};
  width: 100%;
  height: 100vh;
`;

export default function Background({ color }) {
  return <div css={style(color)}></div>;
}
