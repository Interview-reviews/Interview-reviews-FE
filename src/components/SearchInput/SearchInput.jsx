/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { searchInputContainer, inputStyle } from './SearchInput.style';

export default function SearchInput({ placeholder }) {
  const [input, setInput] = useState('');

  return (
    <div css={searchInputContainer}>
      <input
        css={inputStyle}
        value={input}
        name="serachBar"
        placeholder={placeholder}
        onChange={e => setInput(e.target.value)}></input>
      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.3571 21.2143C17.6965 21.2143 21.2143 17.6965 21.2143 13.3571C21.2143 9.01776 17.6965 5.5 13.3571 5.5C9.01776 5.5 5.5 9.01776 5.5 13.3571C5.5 17.6965 9.01776 21.2143 13.3571 21.2143Z"
          stroke="#5C8AFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27.6118 27.5L18.8574 18.8572"
          stroke="#5C8AFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
