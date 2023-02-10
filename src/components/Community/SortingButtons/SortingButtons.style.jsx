import { css } from '@emotion/react';

const buttonStyle = (color, width) => css`
  width: ${width}px;
  height: 35px;

  border-style: none;
  border-radius: 30px;

  font-weight: 500;
  font-size: 14px;

  color: white;
  background: ${color};

  cursor: pointer;
`;

const buttonContainer = css`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

export { buttonStyle, buttonContainer };
