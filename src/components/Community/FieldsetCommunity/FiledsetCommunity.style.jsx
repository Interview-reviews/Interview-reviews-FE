import { css } from '@emotion/react';

const liStyle = css`
  list-style: none;
  display: flex;
  align-items: center;
`;

const labelStyle = css`
  display: inline-block;
  width: 7rem;
  line-height: 5rem;

  background: #f8fafb;
  font-weight: 400;
  font-size: 14px;
  justify-content: center;

  margin-right: 1.5rem;
  border-radius: 6px;
`;

const hrStyle = css`
  background: #eef0f1;
  height: 1px;
  border: 0;
`;

const fieldsetStyle = css`
  border: none;
  width: 80vw;
  height: auto;
`;

const inputStyle = css`
  width: 20vw;
  padding: 10px;

  font-weight: 500;
  font-size: 12px;

  &::placeholder {
    color: #adb1bd;
  }

  border: 1px solid #eaeaea;
  border-radius: 6px;
`;

const formStyle = css`
  padding: 10px;
`;

const textareaStyle = css`
  width: 70%;
  height: 3rem;

  &::placeholder {
    color: #adb1bd;
  }

  align-items: center;

  padding-left: 10px;
  padding-top: 10px;

  font-weight: 500;
  font-size: 12px;

  border: 1px solid #eaeaea;
  border-radius: 6px;
  resize: none;
`;

const titleStyle = css`
  font-weight: 500;
  font-size: 1.5rem;
  margin-left: 2rem;

  padding: 1rem;
`;

const textStyle = css`
  position: relative;
  left: 1rem;
`;

export { liStyle, labelStyle, hrStyle, fieldsetStyle, inputStyle, formStyle, textareaStyle, titleStyle, textStyle };
