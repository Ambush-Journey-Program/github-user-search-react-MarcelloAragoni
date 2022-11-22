import './links.scss';

export default function Links({url,children}){
  return(
    <a className='search--links' href={url}>{children}</a>
  );
}