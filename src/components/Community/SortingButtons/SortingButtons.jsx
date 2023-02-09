/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const buttonStyle = width => css`
  width: ${width}px;
  height: 35px;

  border-style: none;
  border-radius: 30px;

  font-weight: 500;
  font-size: 14px;

  color: white;
  background: #5c8aff;

  margin: 0.3rem;
`;

const buttons = [
  {
    title: '전체',
    width: 60,
  },
  {
    title: 'Q&A',
    width: 60,
  },
  {
    title: '잡담',
    width: 60,
  },
  {
    title: '인강 추천',
    width: 80,
  },
];

export default function SortingButtons() {
  return (
    <div style={{ border: '1px solid brown', display: 'flex' }}>
      {buttons.map(({ title, width }) => (
        <button key={title} css={buttonStyle(width)}>
          {title}
        </button>
      ))}
    </div>
  );
}
