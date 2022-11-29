import { handleFormatDate } from '../../utilities/format-date';
import Avatar from '../avatar';
import UserBox from '../user-box';
import PublicBox from '../public-box';
import LinkBox from '../link-box';
import './style.scss';

export default function MainBox() {
  const formatteddate = handleFormatDate('2018-03-13T12:20:43Z');

  return (
    <div className="main-box">
      <Avatar src="medusa.jpeg" />
      <div className="main-box--user">
        <UserBox
          user="Guilherme Kuniyoshi"
          tag="guilhermekuni"
          date={formatteddate}
          bio="Front-end Engineer with Full Stack experience. Passionate about JavaScript and the whole React ecosystem."
        />
        <PublicBox repositoriesCount="37" followerCount="33" followingCount="25" />
        <LinkBox
          city="Araraquara, SP - Brasil"
          blog="https://github.com/users/guilhermekuni"
          blogLabel="guilhermekuni"
          company="Ambush"
        />
      </div>
    </div>
  );
}
