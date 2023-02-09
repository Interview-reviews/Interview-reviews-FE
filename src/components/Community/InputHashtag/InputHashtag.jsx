/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { inputStyle, tagDivStyle, tagStyle, buttonStyle } from './InputHashtag.style';

export default function InputHashtag() {
  const [newTag, setNewTag] = useState('');
  const [tags, setTags] = useState([]);

  const addTag = () => {
    const tag = newTag.replaceAll(' ', '');
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
    setNewTag('');
  };

  const deleteTag = (e, index) => {
    const newTags = tags.filter((_, tagIndex) => tagIndex !== index);
    setTags(newTags);
    e.preventDefault();
  };

  const onKeyPress = e => {
    if (e.target.value.trim().length && e.key === 'Enter') {
      addTag();
      e.preventDefault();
    }
  };

  return (
    <div css={tagDivStyle}>
      {tags.map((tag, index) => (
        <div key={index} css={tagStyle}>
          #{tag}
          <button css={buttonStyle} onClick={e => deleteTag(e, index)}>
            X
          </button>
        </div>
      ))}
      <input
        css={inputStyle(tags.length)}
        value={newTag}
        name="tags"
        placeholder="해시태그를 입력하세요."
        onChange={e => setNewTag(e.target.value)}
        onKeyPress={onKeyPress}></input>
    </div>
  );
}
