import './style.scss';

export default function Button({ onClick, children, type = 'button' }) {
  return (
    <button onClick={onClick} className="button" type={type}>
      {children}
    </button>
  );
}
