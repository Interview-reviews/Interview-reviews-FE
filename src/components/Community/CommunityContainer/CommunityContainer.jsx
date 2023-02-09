/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CommunityMainHeader from '../CommunityMainHeader/CommunityMainHeader';
import PopularPosts from '../CommunityPopularPosts/CommunityPopularPosts';
// import CommunityPosts from '../CommunityPosts/CommunityPosts';

const containerStyle = css`
  width: 90vw;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid black;
`;

const wrapper = css`
  width: 90vw;
  height: 90%;

  margin: 0 auto;
`;

export default function CommunityContainer() {
  return (
    <div css={wrapper}>
      <div css={containerStyle}>
        <CommunityMainHeader />
        <PopularPosts />
        <div style={{ height: '300px' }} />
        <div style={{ height: '300px' }} />
      </div>
    </div>
  );
}
