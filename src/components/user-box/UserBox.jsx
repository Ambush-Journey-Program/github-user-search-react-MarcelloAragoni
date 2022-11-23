import { formatSimpleLabel } from '../../utilities/string-helper';
import './style.scss';

export default function UserBox({user, tag, date, bio}) {
  const notDefinedLabel = 'Not defined';

  return(
    <div className='user'>
      <div className='user__info'>
      <h1 className='user__info--name'>
        {formatSimpleLabel(user)}
        <span className='user__info--tag'>
          {tag ? `@${tag}`: notDefinedLabel}
        </span>
      </h1>
      <p className='user__info--date'>{formatSimpleLabel(date)}</p>
      </div>
      <p className='user__info--bio'>{formatSimpleLabel(bio)}</p>
    </div>
  );
}