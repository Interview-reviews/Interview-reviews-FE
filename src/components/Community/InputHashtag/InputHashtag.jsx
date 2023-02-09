/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { inputStyle, tagDivStyle, tagStyle, buttonStyle } from './InputHashtag.style';

export default function InputHashtag() {
  const [newTag, setNewTag] = useState('');
  const [tags, setTags] = useState([]);

  const addTag = () => {
    const tag = newTag.replace(/[{}[\]/?.,;:|)*~`!^\-_+<>@#$%&\\=('"\s]/g, '');
    if (!tags.includes(tag) && tag.length) {
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
    if (e.key === 'Enter') {
      addTag();
      e.preventDefault();
    }
  };

  const onChangeHandler = e => setNewTag(e.target.value.slice(0, 10));

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
        onChange={e => onChangeHandler(e)}
        onKeyPress={onKeyPress}></input>
    </div>
  );
}
