/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { useState } from 'react';

const buttonStyle = (color, width) => css`
  width: ${width}px;
  height: 35px;

  border-style: none;
  border-radius: 30px;

  font-weight: 500;
  font-size: 14px;

  color: white;
  background: ${color};

  margin: 0.3rem;

  cursor: pointer;
`;

const buttonContainer = css`
  display: flex;
  border: 1px solid brown;
`;

const buttonArray = [
  {
    title: '전체',
    width: 60,
    background: '#5c8aff',
  },
  {
    title: 'Q&A',
    width: 60,
    background: '#4B5674',
  },
  {
    title: '잡담',
    width: 60,
    background: '#4B5674',
  },
  {
    title: '인강 추천',
    width: 80,
    background: '#4B5674',
  },
];

// 새로고침을 하면 버튼의 색상이 초기화됩니다.
// 선택된 버튼을 저장하거나, 각 페이지마다의 스타일을 변경해야 합니다.
export default function SortingButtons() {
  const [buttons, setButtons] = useState(buttonArray);
  const selectedColor = '#5c8aff';
  const defaultColor = '#4B5674';

  const onClickHandler = (e, title) => {
    setButtons(
      buttons.map(button => {
        if (button.title !== title) {
          return { ...button, background: defaultColor };
        }
        return { ...button, background: selectedColor };
      })
    );
  };

  return (
    <div css={buttonContainer}>
      {buttons.map(({ title, width, background }) => (
        <button key={title} css={buttonStyle(background, width)} onClick={e => onClickHandler(e, title)}>
          {title}
        </button>
      ))}
    </div>
  );
}
