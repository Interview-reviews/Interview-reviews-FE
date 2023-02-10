/** @jsxImportSource @emotion/react */
import PopularSquarePost from '../CommunityPopularPost/CommunityPopularPost';
import popularPostsContainerStyle from './CommunityPopularPosts.style';
import datas from './MockupData';

export default function PopularPosts() {
  return (
    <div css={popularPostsContainerStyle}>
      {datas.slice(0, 4).map(({ id, img, username, hashtags, title, views }) => (
        <PopularSquarePost key={id} img={img} username={username} hashtags={hashtags} title={title} views={views} />
      ))}
    </div>
  );
}
