export async function getUserDetails(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  return response.json();
}
