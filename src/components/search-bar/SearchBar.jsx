import './style.scss';
import Button from '../button/';
import Icons from '../icons/';
import SearchInput from '../search-input/'

export default function SearchBar(){
  return(
    <div className='search--bar'>
      <Icons src='icon-search.svg' alt='search icon'/>
      <SearchInput />
      <Button>Search</Button>
    </div>
  )
}