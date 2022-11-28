import './style.scss';

export default function Avatar({src, alt}){
  const avatarSource = `../../images/${src}`;

  return (
    <img class='avatar' src={avatarSource} alt={alt} />
  );
}