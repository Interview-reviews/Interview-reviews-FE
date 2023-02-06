import { css } from '@emotion/react';

const buttonContainer = css`
  display: flex;
  width: 40%;
  height: content;
  justify-content: space-around;

  margin: 0 auto;

  padding-top: 1rem;
`;

const cancelButton = css`
  width: 25%;
  height: 47px;

  background: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  cursor: pointer;
`;
const confirmButton = ({ isFilled }) => css`
  width: 45%;
  height: 47px;

  background: ${isFilled ? '#9a9a9a' : '#5C8AFF'};
  border-radius: 8px;
  border: none;
  color: white;
  cursor: pointer;
`;

export { buttonContainer, cancelButton, confirmButton };
