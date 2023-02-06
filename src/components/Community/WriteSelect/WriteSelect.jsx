/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import selectStyle from './WriteSelect.style';

export default function WriteSelect() {
  const defaultOption = '카테고리 선택';
  const selectList = [defaultOption, 'Q&A', '잡담', '인강 추천'];
  const [selected, setSelected] = useState(defaultOption);

  const handleSelect = e => {
    setSelected(e.target.value);
  };

  return (
    <select css={selectStyle} required value={selected} onChange={handleSelect}>
      {selectList.map(item => (
        <option value={item} key={item} disabled={item === defaultOption}>
          {item}
        </option>
      ))}
    </select>
  );
}
