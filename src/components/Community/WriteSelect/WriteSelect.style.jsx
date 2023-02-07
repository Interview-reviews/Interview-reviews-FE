import { css } from '@emotion/react';

const selectStyle = css`
  height: 2rem;
  width: 20%;
  border: 1px solid #eaeaea;
  border-radius: 6px;

  &::option[value=''][disabled] {
    display: none;
  }
`;

export default { selectStyle };
