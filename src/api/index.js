export async function getUserApi(userId, { signal }) {
  const res = await fetch(`/data/users/user-${userId}.json`, { signal })
  return await res.json()
}
