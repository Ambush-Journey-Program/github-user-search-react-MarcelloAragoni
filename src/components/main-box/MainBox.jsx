import { handleFormatDate } from '../../utilities/format-date';
import Avatar from '../avatar';
import UserBox from '../user-box';
import PublicBox from '../public-box';
import LinkBox from '../link-box';
import './style.scss';

export default function MainBox({ details = '' }) {
  const formattedDate = handleFormatDate(details.created_at);

  return (
    <div id="mainbox" className="main-box main-box--empty">
      <Avatar src={details.avatar_url} />
      <div className="main-box--user">
        <UserBox user={details.name} tag={details.login} date={formattedDate} bio={details.bio} />
        <PublicBox
          repositoriesCount={details.public_repos}
          followerCount={details.followers}
          followingCount={details.following}
        />
        <LinkBox
          city={details.location}
          blog={details.blog}
          blogLabel={details.login}
          company={details.company}
        />
      </div>
    </div>
  );
}
