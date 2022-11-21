import './button.scss';

export default function Button({children}) {
  return (
    <div>
      <button className="button" type='button'>{children}</button>
    </div>
  );
}
