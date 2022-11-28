import { formatSimpleLabel } from '../../utilities/string-helper';
import "./style.scss";

export default function PublicBox({repositories, follower, following}) {
  return (
    <div class='publicBox'>
      <div>
        <span class="publicBox--title">Repos</span>
        <p id="publicBox--repositories" class="publicBox--details">{formatSimpleLabel(repositories)}</p>
      </div>
      <div>
        <span class="publicBox--title">Followers</span>
        <p id="publicBox--followers" class="publicBox--details">{formatSimpleLabel(follower)}</p>
      </div>
      <div>
        <span class="publicBox--title">Following</span>
        <p id="publicBox--following" class="publicBox--details">{formatSimpleLabel(following)}</p>
      </div>
    </div>
  );
}
