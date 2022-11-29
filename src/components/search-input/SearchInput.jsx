import './style.scss';

export default function SearchInput({ setInputState, value }) {
  function handleChange(event) {
    setInputState(event.target.value);
  }

  return (
    <input
      onChange={handleChange}
      className="input--Search"
      type="text"
      placeholder="Username"
      value={value}
    />
  );
}
