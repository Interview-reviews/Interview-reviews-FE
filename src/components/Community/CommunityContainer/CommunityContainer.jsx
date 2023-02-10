/** @jsxImportSource @emotion/react */
import CommunityMainHeader from '../CommunityMainHeader/CommunityMainHeader';
import PopularPosts from '../CommunityPopularPosts/CommunityPopularPosts';
import CommunityPosts from '../CommunityPosts/CommunityPosts';
import { containerStyle, wrapper } from './CommunityContainer.style';

export default function CommunityContainer() {
  return (
    <div css={wrapper}>
      <div css={containerStyle}>
        <CommunityMainHeader />
        <PopularPosts />
        <CommunityPosts />
      </div>
    </div>
  );
}
