import { Link } from 'react-router-dom';
import BackgroundRectangle from '../../components/BackgroundRectangle/BackgroundRectangle';
import Nav from '../../components/Nav';
import PopularPosts from '../../components/Community/CommunityPopularPosts/CommunityPopularPosts';
import CommunityPosts from '../../components/Community/CommunityPosts/CommunityPosts';

export default function Community() {
  return (
    <div>
      <Nav />
      <BackgroundRectangle color="darkBlue" />
      <PopularPosts />
      <CommunityPosts />
      <Link to="/Community/Write">ㅇㅇ</Link>
    </div>
  );
}
