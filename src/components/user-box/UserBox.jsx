import './style.scss';

export default function UserBox({user, tag, date, bio}) {
  const Fuser = user ? user : 'Not defined';
  const Ftag = tag ? tag : 'Not defined';
  const Fbio = bio ? bio : 'Not defined';
  const Fdate = date ? date : 'Not defined';

  return(
    <div className='user'>
      <div className='user__info'>
      <h1 className='user__info--name'>
        {Fuser}
        <span className='user__info--tag'>
          {`@${Ftag}`}
        </span>
      </h1>
      <p className='user__info--date'>{Fdate}</p>
      </div>
      <p className='user__info--bio'>{Fbio}</p>
    </div>
  );
}