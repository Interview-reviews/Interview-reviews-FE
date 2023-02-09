import { css } from '@emotion/react';

const inputStyle = length => css`
  font-weight: 500;
  font-size: 12px;

  border-style: none;

  &::placeholder {
    color: #adb1bd;
  }

  display: ${length > 2 ? 'none' : ''};
`;

const tagDivStyle = css`
  display: flex;
  width: content;
  padding: 10px;

  font-weight: 500;
  font-size: 12px;

  &::placeholder {
    color: #adb1bd;
  }

  border: 1px solid #eaeaea;
  border-radius: 6px;
`;

const tagStyle = css`
  font-weight: 500;
  font-size: 12px;

  color: #5c8aff;
`;

const buttonStyle = css`
  border-style: none;

  color: #ff6b7d;
  background-color: white;

  font-weight: 500;
  font-size: 12px;

  cursor: pointer;
`;

export { inputStyle, tagDivStyle, tagStyle, buttonStyle };
