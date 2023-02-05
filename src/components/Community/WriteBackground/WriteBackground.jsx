/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import WriteContainer from '../WriteContainer/WriteContainer';

const colors = {
  lightBlue: '#5C8AFF',
  darkBlue: '#37415B',
};

const style = color => css`
  background-color: ${colors[color]};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export default function WriteBackground({ color }) {
  return (
    <div css={style(color)}>
      <WriteContainer />
    </div>
  );
}
