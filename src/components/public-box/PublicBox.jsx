import { formatSimpleLabel } from '../../utilities/string-helper';
import './style.scss';

export default function PublicBox({ repositoriesCount, followerCount, followingCount }) {
  return (
    <div className="public-box">
      <div>
        <span className="public-box--title">Repos</span>
        <p id="repositories" className="public-box--details">
          {formatSimpleLabel(repositoriesCount)}
        </p>
      </div>
      <div>
        <span className="public-box--title">Followers</span>
        <p id="followers" className="public-box--details">
          {formatSimpleLabel(followerCount)}
        </p>
      </div>
      <div>
        <span className="public-box--title">Following</span>
        <p id="following" className="public-box--details">
          {formatSimpleLabel(followingCount)}
        </p>
      </div>
    </div>
  );
}
