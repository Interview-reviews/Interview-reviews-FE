import { css } from '@emotion/react';

const searchInputContainer = css`
  width: 35vw;
  height: 6vh;

  display: flex;
  align-items: center;

  border-style: none;
  border-radius: 2rem;
  background: white;

  justify-content: space-around;
`;

const inputStyle = css`
  width: 25vw;
  height: 3vh;

  border-style: none;
  border-radius: 2rem;

  &::placeholder {
    color: #b9b9b9;
  }
  &:focus {
    outline: none;
  }

  font-weight: 400;
  font-size: 16px;
`;

export { searchInputContainer, inputStyle };
