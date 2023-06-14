export default function UserRole(role: string) {
  if (!role) {
    throw new Error('Role is required')
  }

  this.role = role.toLowerCase()
  const validRoles = ['admin', 'user', 'super admin']

  

  if (!validRoles.includes(role)) {
    throw new Error('Invalid role')
  }
}
