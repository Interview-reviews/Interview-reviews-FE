import { css } from '@emotion/react';

const careerColors = {
  경력: '#FFF0A4',
  신입: '#CAF9FF',
};

export default prop => css`
  width: 45px;
  height: 22px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;

  background: ${careerColors[prop]};

  font-size: 12px;
`;
