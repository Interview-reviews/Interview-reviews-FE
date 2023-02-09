import { Link } from 'react-router-dom';
import BackgroundRectangle from '../../components/BackgroundRectangle/BackgroundRectangle';
import Nav from '../../components/Nav';
// import PopularPosts from '../../components/Community/CommunityPopularPosts/CommunityPopularPosts';
// import CommunityPosts from '../../components/Community/CommunityPosts/CommunityPosts';
import CommunityContainer from '../../components/Community/CommunityContainer/CommunityContainer';

export default function Community() {
  return (
    <div>
      <Nav />
      <BackgroundRectangle color="darkBlue" />
      <CommunityContainer />
      {/* <PopularPosts />
      <CommunityPosts /> */}
      <Link to="/Community/Write">글 작성</Link>
    </div>
  );
}
