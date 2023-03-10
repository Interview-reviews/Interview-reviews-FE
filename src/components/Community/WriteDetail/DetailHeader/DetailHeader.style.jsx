import { css } from '@emotion/react';

const headerContainer = css`
  display: flex;
  flex-direction: column;

  width: 90%;
  height: 35%;

  margin-top: 5vh;
`;

const mainInfoStyle = css`
  display: flex;
  width: 250px;
  height: 5vh;

  justify-content: space-between;
  align-items: center;
`;
const imgStyle = css`
  width: 32px;
  height: 32px;
  border: 1px solid green;
  border-radius: 50%;

  text-align: center;
  line-height: 32px;
`;

const contentStyle = css`
  width: 80%;
  margin: 2.5vh 0;
`;

const reactionContainerStyle = css`
  width: 200px;
  height: 5vh;
  border: 1px solid black;

  display: flex;

  justify-content: space-between;
  align-items: center;
`;

const hrStyle = css`
  background: #eef0f1;
  border: 0;
  height: 1px;

  margin: 2.5vh 0;
`;
export { headerContainer, mainInfoStyle, imgStyle, contentStyle, reactionContainerStyle, hrStyle };
