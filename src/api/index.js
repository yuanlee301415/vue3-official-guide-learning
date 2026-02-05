export async function getUserApi(userId, { signal }) {
  const res = await fetch(`/data/users/user-${userId}.json`, { signal })
  return await res.json()
}

export async function getRoleApi(roleId, { signal }) {
  const res = await fetch(`/data/roles/role-${roleId}.json`, { signal })
  return await res.json()
}
