import './style.scss';

export default function Icons({ src, alt }) {
  const imageSource = `../../images/${src}`;

  return <img className="icon" src={imageSource} alt={alt} />;
}
