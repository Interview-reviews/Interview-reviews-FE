import BackgroundRectangle from '../../components/BackgroundRectangle/BackgroundRectangle';
import Nav from '../../components/Nav';
import CommunityContainer from '../../components/Community/CommunityContainer/CommunityContainer';

export default function Community() {
  return (
    <div>
      <Nav />
      <BackgroundRectangle color="darkBlue" />
      <CommunityContainer />
    </div>
  );
}
