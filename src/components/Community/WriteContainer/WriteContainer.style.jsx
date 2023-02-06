import { css } from '@emotion/react';

// height는 content만큼 늘어나도록 설정
const parentContainer = css`
  width: 90vw;
  overflow: hidden;
  height: auto;

  background-color: #f8fafb;
  border-radius: 20px;
  margin-top: 3em;
  margin-bottom: 10rem;

  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;

const childContainer = css`
  width: 90%;
  overflow: hidden;
  height: auto;

  background-color: #ffffff;
  border-radius: 20px;
  border: 1px solid #dfdfdf;

  display: flex;
  flex-driection: column;
  align-items: center;
`;

export { parentContainer, childContainer };
