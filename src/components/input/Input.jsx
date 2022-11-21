import './input.scss'

export default function Input({placeHolder}){
  return(
    <input class='input--Search'  type="text" placeholder={placeHolder}/>
  );
}