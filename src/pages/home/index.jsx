import { useState } from 'react';
import { getUserDetails } from '../../services/users';
import { handleAddClass } from '../../utilities/handle-class';
import SearchBar from '../../components/search-bar';
import MainBox from '../../components/main-box';
import './style.scss';

export default function Home() {
  const [userResponse, setUserResponse] = useState();

  const handleGetUser = async (username) => {
    const responseJson = await getUserDetails(username);
    setUserResponse(responseJson);
    handleAddClass('mainbox', 'main-box--empty');
  };

  return (
    <div className="home">
      <SearchBar onSubmit={handleGetUser} />
      <MainBox details={userResponse} />
    </div>
  );
}
