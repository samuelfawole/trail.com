import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@trail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'sam smith',
    email: 'sam@trail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'james brown',
    email: 'james@trail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]
export default users
