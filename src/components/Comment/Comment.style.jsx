import { css } from '@emotion/react';

const commentContaier = css`
  width: 100%;
  height: 13vh;

  display: flex;
  align-items: center;
`;

const imgContainer = css`
  width: 32px;
  height: 32px;

  border-radius: 50%;
  border: 1px solid #dfdfdf;

  text-align: center;
  line-height: 32px;

  margin-right: 15px;
  margin-bottom: 20px;
`;

const infoContainer = css`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 55%;

  justify-content: space-between;
`;

const headerStyle = css`
  font-weight: 500;
  font-size: 14px;

  width: 12vw;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const dateStyle = css`
  font-weight: 400;
  font-size: 12px;

  color: #757575;
`;

const contentStyle = css`
  font-weight: 400;
  font-size: 15px;

  margin-top: 8px;
  color: #3c3c3c;
`;

const replyStyle = css`
  font-weight: 400;
  font-size: 12px;

  color: #757575;

  width: 55px;
  padding-top: 15px;

  cursor: pointer;
`;

export { commentContaier, imgContainer, infoContainer, headerStyle, dateStyle, contentStyle, replyStyle };
