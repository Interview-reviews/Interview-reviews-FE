import { css } from '@emotion/react';

const popularPostContainerStyle = css`
  width: 19vw;
  height: 14.5em;

  background: white;
  box-shadow: 0 20px 42px rgba(0, 0, 0, 0.05);
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const popularPostStyle = css`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80%;
`;

const viewsStyle = css`
  padding: 0.8em;
  align-items: center;
  color: #737373;
  font-weight: 400;
  font-size: 13px;
`;

export { popularPostContainerStyle, popularPostStyle, viewsStyle };
