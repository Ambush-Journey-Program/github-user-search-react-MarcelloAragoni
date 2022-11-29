import { BASE_URL } from '../utilities/consts';

export async function getUserDetails(username) {
  const response = await fetch(`${BASE_URL}/users/${username}`);
  return response.json();
}
