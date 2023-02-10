import { css } from '@emotion/react';

const colors = {
  lightBlue: '#5c8aff',
  darkBlue: '#37415B',
};

const divStyle = (color = 'ligthBlue') => css`
  width: 100%;
  height: 20em;

  background: ${colors[color]};
  border-radius: 0px 0px 174.5px 174.5px;

  position: absolute;

  z-index: -3;
`;

export default divStyle;
