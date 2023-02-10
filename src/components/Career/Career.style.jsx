import { css } from '@emotion/react';

const careerColors = {
  경력: '#FFF0A4',
  신입: '#CAF9FF',
};
export default prop => css`
  display: flex;
  width: 30px;
  height: 20px;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  border-radius: 6px;
  background: ${careerColors[prop]};
  font-size: 12px;
`;
