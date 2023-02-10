/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';

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
        <Link css={{ margin: '3rem' }} to="/CommunityDetail">
          상세 페이지로
        </Link>
        <CommunityPosts />
      </div>
    </div>
  );
}
