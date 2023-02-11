import { css } from '@emotion/react';

const writeContainer = css`
  width: 100%;
  height: auto;

  margin-top: 35px;
  margin-bottom: 50px;

  display: flex;
`;

const imgContainer = css`
  width: 32px;
  height: 32px;

  border: 1px solid #e8e8e8;
  border-radius: 50%;

  text-align: center;
  line-height: 32px;

  margin-right: 15px;
  margin-bottom: 20px;
`;

const inputStyle = css`
  width: 99%;
  height: 8vh;

  background: #f9f9f9;
  border: 1px solid #e8e8e8;
  border-radius: 6px;

  font-weight: 500;
  font-size: 14px;

  &::placeholder {
    color: #9d9d9d;
  }
`;

const inputContainer = css`
  width: 100%;
  height: 15vh;
`;

const buttonContainer = css`
  display: flex;
  justify-content: flex-end;
`;

const buttonStyle = css`
  width: 112px;
  height: 40px;
  background: #ffffff;

  border: 1px solid #bfbfbf;
  border-radius: 24px;

  margin-top: 10px;

  cursor: pointer;
`;

export { writeContainer, imgContainer, inputStyle, inputContainer, buttonContainer, buttonStyle };
