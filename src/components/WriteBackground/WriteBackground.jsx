/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const colors = {
  lightBlue: '#5C8AFF',
  darkBlue: '#37415B',
};

const style = color => css`
  background-color: ${colors[color]};
  width: 100%;
  height: 100vh;
`;

export default function WriteBackground({ color }) {
  return <div css={style(color)}></div>;
}
