import './button.scss';

export default function Button({text}) {
  return (
    <div>
      <button className="button" type='button'>{text}</button>
    </div>
  );
}
