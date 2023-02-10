import { css } from '@emotion/react';

const colors = {
  lightBlue: '#5C8AFF',
  darkBlue: '#37415B',
};

const backgroundStyle = color => css`
  background-color: ${colors[color]};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export default backgroundStyle;
