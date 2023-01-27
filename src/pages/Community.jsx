import BackgroundRectangle from '../components/BackgroundRectangle/BackgroundRectangle';
import Nav from '../components/Nav';
import PopularPosts from '../components/PopularPosts/PopularPosts';
import CommunityPosts from '../components/CommunityPosts/CommunityPosts';

export default function Community() {
  return (
    <div>
      <Nav />
      <BackgroundRectangle color="darkBlue" />
      <PopularPosts />
      <CommunityPosts />
    </div>
  );
}
