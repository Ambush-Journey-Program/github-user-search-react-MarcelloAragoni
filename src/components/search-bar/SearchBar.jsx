import { useState } from 'react';
import Button from '../button';
import Icons from '../icons';
import SearchInput from '../search-input';
import './style.scss';

export default function SearchBar({ onSubmit }) {
  const [inputState, setInputState] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(inputState);
  }

  return (
    <form onSubmit={handleSubmit} className="search--bar">
      <Icons src="icon-search.svg" alt="search icon" />
      <SearchInput setInputState={setInputState} value={inputState} />
      <Button type="submit">Search</Button>
    </form>
  );
}
