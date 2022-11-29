import './style.scss';

export default function Avatar({ src, alt }) {
  const avatarSource = `../../images/${src}`;

  return <img className="avatar" src={avatarSource} alt={alt} />;
}
