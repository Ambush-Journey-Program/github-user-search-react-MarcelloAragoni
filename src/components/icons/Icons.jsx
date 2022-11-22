
import './style.scss';

export default function Icons({src,alt}){
  const imageSource = `../../images/${src}`

  return(
    <img class='icon' src={imageSource} alt={alt} />
  );
}