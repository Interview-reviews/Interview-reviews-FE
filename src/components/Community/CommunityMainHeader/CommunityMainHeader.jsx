/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import SortingButtons from '../SortingButtons/SortingButtons';

const title = css`
  width: 95%;
  height: 10vh;

  font-weight: 600;
  font-size: 32px;

  line-height: 10vh;

  color: white;

  margin-top: 5vh;
`;

const manipulate = css`
  width: 95%;
  height: 10vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid blue;
`;

export default function CommunityMainHeader() {
  return (
    <>
      <div css={title}>커뮤니티</div>
      <div css={manipulate}>
        <SortingButtons />
        <div>검색 창</div>
        <div>글 작성 버튼</div>
      </div>
    </>
  );
}
