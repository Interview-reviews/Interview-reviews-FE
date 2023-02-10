/** @jsxImportSource @emotion/react */

import CommunityPost from '../CommunityPost/CommunityPost';
import datas from '../CommunityPopularPosts/MockupData';
import girdContainer from './CommunityPosts.style';

export default function CommunityPosts() {
  return (
    <div css={girdContainer}>
      {datas.map(data => (
        <CommunityPost key={data.id} {...data} />
      ))}
    </div>
  );
}
