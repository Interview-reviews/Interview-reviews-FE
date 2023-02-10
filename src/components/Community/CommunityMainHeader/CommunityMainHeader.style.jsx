import { css } from '@emotion/react';

const titleStyle = css`
  width: 95%;
  height: 10vh;

  font-weight: 600;
  font-size: 32px;

  line-height: 10vh;

  color: white;

  margin-top: 5vh;
`;

const manipulateStyle = css`
  width: 95%;
  height: 10vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const divButtonStyle = css`
  width: 10vw;
  height: 5vh;
  background: #252525;
  border-radius: 27px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
`;

const linkStyle = css`
  text-decoration: none;
  color: white;
`;

export { titleStyle, manipulateStyle, divButtonStyle, linkStyle };
