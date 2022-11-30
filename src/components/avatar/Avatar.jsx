import './style.scss';

export default function Avatar({ src, alt }) {
  return <img className="avatar" src={src} alt={alt} />;
}
