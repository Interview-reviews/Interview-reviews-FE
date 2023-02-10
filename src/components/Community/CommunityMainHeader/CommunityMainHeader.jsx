/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import SearchInput from '../../SearchInput/SearchInput';
import SortingButtons from '../SortingButtons/SortingButtons';

import { titleStyle, manipulateStyle, divButtonStyle, linkStyle } from './CommunityMainHeader.style';

export default function CommunityMainHeader() {
  return (
    <>
      <div css={titleStyle}>커뮤니티</div>
      <div css={manipulateStyle}>
        <SortingButtons />
        <SearchInput placeholder="검색어를 입력하세요." />
        <div css={divButtonStyle}>
          <Link to="/Community/Write" css={linkStyle}>
            글 올리기
          </Link>
        </div>
      </div>
    </>
  );
}
